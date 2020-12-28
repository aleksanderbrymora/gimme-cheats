import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SheetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 0, type: 'int' })
  forkedTimes: number;

  @Column({ default: 0, type: 'int' })
  lookedAtTimes: number;

  @Column({ default: 0, type: 'int' })
  points: number;

  @Column({ default: false })
  containsProfanity: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
