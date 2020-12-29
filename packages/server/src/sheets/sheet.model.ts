import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Length, Min } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Base } from '../base/base.entity';

@ObjectType()
@Entity()
export class Sheet extends Base {
  @Length(1, 50)
  @Field()
  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0, type: 'int' })
  forkedTimes: number;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0, type: 'int' })
  lookedAtTimes: number;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0, type: 'int' })
  points: number;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  containsProfanity: boolean;
}
