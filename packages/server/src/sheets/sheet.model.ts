import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Length, Min } from 'class-validator';
import { User } from 'src/users/user.model';
import { Column, Entity, ManyToOne } from 'typeorm';
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

  // TODO change the nullable to false. Sheet cannot be saved without a login
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.sheets)
  user: User;
}
