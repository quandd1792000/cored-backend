import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findOne(query: any): Promise<User>;
    findAll(): Promise<User[]>;
    createUser(createuser: any): Promise<User[]>;
    updateUser(id: string, updateData: any): Promise<User>;
    updateProfile(id: string, inf: any): Promise<User>;
    updatePathInProfile(userId: string, files: any): Promise<User>;
    uploadFiles(userId: string, files: any): Promise<any>;
}
