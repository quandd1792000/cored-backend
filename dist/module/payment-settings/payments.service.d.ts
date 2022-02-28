import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './entities/payment.entity';
export declare class PaymentsService {
    private readonly paymentRepository;
    private readonly usersService;
    constructor(paymentRepository: Repository<Payment>, usersService: UsersService);
    create(createPaymentDto: CreatePaymentDto): Promise<Payment>;
    updatePayment(id: string, inf: any): Promise<Payment>;
    uploadsPayment(paymentId: any, files: any): Promise<Payment>;
    findAll(): string;
    findOne(query: any): Promise<Payment>;
    update(id: string, updatePaymentDto: any): Promise<Payment>;
    remove(id: number): string;
}
