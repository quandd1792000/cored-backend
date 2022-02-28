import { TimersService } from './timers.service';
import { CreateTimerDto } from './dto/create-timer.dto';
export declare class TimersController {
    private readonly timersService;
    constructor(timersService: TimersService);
    create(createTimerDto: CreateTimerDto): Promise<import("./entities/timer.entity").Timer>;
    findAll(): Promise<import("./entities/timer.entity").Timer[]>;
    findOne(id: string): Promise<import("./entities/timer.entity").Timer>;
    update(userId: string): Promise<import("./entities/timer.entity").Timer[]>;
    remove(id: string): string;
}
