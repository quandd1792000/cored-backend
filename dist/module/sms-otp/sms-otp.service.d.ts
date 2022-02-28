import { UpdateSmsOtpDto } from './dto/update-sms-otp.dto';
import { Repository } from 'typeorm';
import { SmsOtp } from './entities/sms-otp.entity';
export declare class SmsOtpService {
    private readonly SmsOtpRepository;
    constructor(SmsOtpRepository: Repository<SmsOtp>);
    create(): Promise<{
        smsId: string;
    }>;
    findAll(): string;
    findOne(query: any): Promise<SmsOtp>;
    update(id: number, updateSmsOtpDto: UpdateSmsOtpDto): string;
    remove(id: number): string;
}
