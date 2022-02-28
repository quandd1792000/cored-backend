import { SmsOtpService } from './sms-otp.service';
import { CreateSmsOtpDto } from './dto/create-sms-otp.dto';
import { UpdateSmsOtpDto } from './dto/update-sms-otp.dto';
export declare class SmsOtpController {
    private readonly smsOtpService;
    constructor(smsOtpService: SmsOtpService);
    create(createSmsOtpDto: CreateSmsOtpDto): Promise<{
        smsId: string;
    }>;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/sms-otp.entity").SmsOtp>;
    update(id: string, updateSmsOtpDto: UpdateSmsOtpDto): string;
    remove(id: string): string;
}
