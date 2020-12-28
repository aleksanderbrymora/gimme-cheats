import { Column, Entity } from 'typeorm';
import { Base } from '../base/base.entity';

@Entity()
export class SheetEntity extends Base {
  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ default: 0, type: 'int' })
  forkedTimes: number;

  @Column({ default: 0, type: 'int' })
  lookedAtTimes: number;

  @Column({ default: 0, type: 'int' })
  points: number;

  @Column({ default: false })
  containsProfanity: boolean;
}
