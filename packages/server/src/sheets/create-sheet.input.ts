import { Field, InputType, Int } from '@nestjs/graphql';
import { Length, Min } from 'class-validator';
import { User } from '../users/user.model';
import { Sheet } from './sheet.model';

@InputType()
export class CreateSheetInput implements Partial<Sheet> {
  @Field(() => Boolean, { defaultValue: false })
  containsProfanity: boolean;

  @Length(1, 50)
  @Field()
  title: string;

  @Field(() => Int)
  user: User;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  forkedTimes?: number;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  points?: number;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  lookedAtTimes?: number;
}
