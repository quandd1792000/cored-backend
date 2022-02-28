import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
  HttpException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  VerifyOtpDto,
} from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { isPhoneNumber } from 'class-validator';
import { ObjectId } from 'mongodb';
import { SmsOtpService } from '../sms-otp/sms-otp.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly otpService: SmsOtpService,
    private readonly jwt: JwtService,
  ) {}
  saltOrRounds = 10;

  async generateJwtToken(payload: any) {
    return this.jwt.sign(payload);
  }

  async validateUser(IdentityCard: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ IdentityCard });

    if (user && this.checkPassword(password, user.password)) {
      const { ...result } = user;

      return result;
    }

    return null;
  }

  async validateUserByToken(id: string): Promise<any> {
    const user = await this.usersService.findOne({ _id: ObjectId(id) });
    if (user) {
      return user;
    }
    return null;
  }

  async login(params: LoginDto) {
    const currentUser: any = await this.usersService.findOne({
      identityID: params.personalID,
    });

    if (!currentUser) {
      throw new UnprocessableEntityException(`Identity card don't exits`);
    }
    const passwordValid = await this.checkPassword(
      params.password,
      currentUser.password,
    );

    if (!passwordValid) {
      throw new UnprocessableEntityException('Password failed');
    }

    const payload = {
      email: currentUser.email,
      phone: currentUser.phone,
      IdentityCard: currentUser.IdentityCard,
      _id: currentUser._id,
      sub: currentUser._id,
    };

    const accessToken = await this.generateJwtToken(payload);

    currentUser.accessToken = accessToken;

    return currentUser;
  }

  async register(params: RegisterDto) {
    //Check is Identity Card is not exits
    const checkIdentityCard = await this.usersService.findOne({
      identityID: params.identityID,
    });

    if (checkIdentityCard) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: 'Identity card alredy exits',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const phoneNumber = params.countryCode + params.phone;
    //Check is phone number
    if (!isPhoneNumber(phoneNumber)) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: 'Phone number failed',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    //Check is phone number is not exits
    const checkPhone = await this.usersService.findOne({
      phoneNumber: phoneNumber,
    });

    if (checkPhone) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: 'Phone number alredy exits',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    params.password = await this.encryptionPassword(params.password);

    const user: any = {
      ...params,
      phoneNumber: phoneNumber,
    };

    const result: any = await this.usersService.createUser(user);
    result._id = result._id.toString();

    result.accessTokens = await this.generateJwtToken({
      email: result.email,
      phone: result.phone,
      _id: result._id,
      sub: result._id,
    });

    return result;
  }

  async uploadFiles(userId: string, files: any) {
    const check = await this.usersService.findOne({ _id: ObjectId(userId) });
    if (!check) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `couldn't find user {id: ${userId}}`,
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    await this.usersService.uploadFiles(userId, files);
    return await this.usersService.findOne({ _id: ObjectId(userId) });
  }

  async encryptionPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async checkPassword(input: string, password: string) {
    return await bcrypt.compare(input, password);
  }

  async forgotPassword(inf: ForgotPasswordDto) {
    const user = await this.usersService.findOne({
      identityID: inf.personalID,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: `Identity card don't exits`,
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return await this.otpService.create();
  }

  async verifyOtp(inf: VerifyOtpDto) {
    const check = await this.otpService.findOne({ _id: ObjectId(inf.smsId) });
    const now = Date.now();
    if (now > check.expires) {
      return { message: 'Timeout. Please try again' };
    }
    if (!(await bcrypt.compare(check.hash, inf.OTP))) {
      return { message: 'OTP failed' };
    }
    return { message: 'OK' };
  }
}
