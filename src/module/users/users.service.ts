import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FieldNameOfFileType, User, VerifyType } from './entities/users.entity';
import { ObjectId } from 'mongodb';
import { FieldNoApproval } from './dto/update-user.dto';
import { isEnum } from 'class-validator';
import { RegisterDto } from '../auth/dto/auth.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOne(query: any): Promise<User> {
    const user = await this.usersRepository.findOne({ where: query });
    if (user) {
      user._id = user._id.toString();
      return user;
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async createUser(createuser: any) {
    const creataUser = this.usersRepository.create(createuser);
    return await this.usersRepository.save(creataUser);
  }

  async updateUser(id: string, updateData: any) {
    await this.usersRepository.update(id, updateData);
    return await this.findOne({ _id: ObjectId(id) });
  }

  async updateProfile(id: string, inf: any) {
    Object.keys(inf).reduce((total, currentValue) => {
      if (inf[currentValue] && !isEnum(currentValue, FieldNoApproval)) {
        inf[currentValue + 'Verify'] = VerifyType.PENDING;

        return currentValue;
      } else if (!inf[currentValue]) {
        delete inf[currentValue];
      }
      return currentValue;
    }, 'start');
    return this.updateUser(id, inf);
  }

  async updatePathInProfile(userId: string, files: any) {
    const ObjUpdate = await this.uploadFiles(userId, files);
    return await this.updateProfile(userId, ObjUpdate);
  }

  async uploadFiles(userId: string, files: any) {
    const ObjUpdate: any = {};

    files.reduce((total, currentValue) => {
      if (!isEnum(currentValue.fieldname, FieldNameOfFileType)) {
        throw new HttpException(
          {
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            error: `${currentValue.fieldname} failed field name of file`,
          },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
      ObjUpdate[currentValue.fieldname] = process.env.HOST + currentValue.path;
    }, 'start');

    await this.updateUser(userId, ObjUpdate);
    return ObjUpdate;
  }

  // async resetPassword(id, password): Promise<User> {
  //   const user = await this.usersRepository.findOneOrFail(id);
  //   user.password = password;

  //   return this.usersRepository.save(user);
  // }
}
