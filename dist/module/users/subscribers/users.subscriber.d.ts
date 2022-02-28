import { EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from '../entities/users.entity';
export declare class UserSubscriber implements EntitySubscriberInterface {
    listenTo(): typeof User;
    afterInsert(event: InsertEvent<User>): Promise<void>;
}
