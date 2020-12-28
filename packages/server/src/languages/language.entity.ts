import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  emoji: string;
}
