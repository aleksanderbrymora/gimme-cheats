import { User } from 'src/users/user.model';
import { Base } from '../base/base.entity';
export declare class Sheet extends Base {
    title: string;
    forkedTimes: number;
    lookedAtTimes: number;
    points: number;
    containsProfanity: boolean;
    user: User;
}
