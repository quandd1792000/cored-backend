import { Repository } from 'typeorm';
import { CreateTimerDto } from './dto/create-timer.dto';
import { Timer } from './entities/timer.entity';
export declare class TimersService {
    private readonly timerRepository;
    constructor(timerRepository: Repository<Timer>);
    create(createTimerDto: CreateTimerDto): Promise<Timer>;
    findAll(): Promise<Timer[]>;
    findOne(query: any): Promise<Timer>;
    update(userId: string): Promise<Timer[]>;
    remove(id: number): string;
}
