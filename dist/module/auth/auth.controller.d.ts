import { AuthService } from './auth.service';
import { ForgotPasswordDto, LoginDto, RegisterDto, VerifyOtpDto } from './dto/auth.dto';
import { User } from 'src/module/users/entities/users.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<User>;
    register(body: RegisterDto): Promise<any>;
    uploadFiles(files: any, req: any): Promise<User>;
    forgotPassword(body: ForgotPasswordDto): Promise<{
        smsId: string;
    }>;
    verifyOtp(body: VerifyOtpDto): Promise<{
        message: string;
    }>;
}
