import { JwtService } from '@nestjs/jwt';
import { ForgotPasswordDto, LoginDto, RegisterDto, VerifyOtpDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { SmsOtpService } from '../sms-otp/sms-otp.service';
export declare class AuthService {
    private readonly usersService;
    private readonly otpService;
    private readonly jwt;
    constructor(usersService: UsersService, otpService: SmsOtpService, jwt: JwtService);
    saltOrRounds: number;
    generateJwtToken(payload: any): Promise<string>;
    validateUser(IdentityCard: string, password: string): Promise<any>;
    validateUserByToken(id: string): Promise<any>;
    login(params: LoginDto): Promise<any>;
    register(params: RegisterDto): Promise<any>;
    uploadFiles(userId: string, files: any): Promise<import("../users/entities/users.entity").User>;
    encryptionPassword(password: string): Promise<string>;
    checkPassword(input: string, password: string): Promise<boolean>;
    forgotPassword(inf: ForgotPasswordDto): Promise<{
        smsId: string;
    }>;
    verifyOtp(inf: VerifyOtpDto): Promise<{
        message: string;
    }>;
}
