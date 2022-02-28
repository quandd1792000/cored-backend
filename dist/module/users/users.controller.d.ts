import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    readonly userService: UsersService;
    constructor(userService: UsersService);
    findAll(): Promise<import("./entities/users.entity").User[]>;
    findUser(req: any): any;
    update(id: string, body: UpdateUserDto): Promise<import("./entities/users.entity").User>;
    upload(files: any, req: any): Promise<import("./entities/users.entity").User>;
}
