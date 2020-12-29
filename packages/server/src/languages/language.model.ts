import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Language {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Length(1, 50)
  @Field()
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Field()
  @Column()
  emoji: string;
}
