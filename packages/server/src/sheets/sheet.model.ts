import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Length, Min } from 'class-validator';

@ObjectType()
export class Sheet {
  @Field(() => Int)
  id: number;

  @Length(1, 50)
  @Field()
  title: string;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  forkedTimes: number;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  lookedAtTimes: number;

  @Min(0)
  @Field(() => Int, { defaultValue: 0 })
  points: number;

  @Field(() => Boolean, { defaultValue: false })
  containsProfanity: boolean;
}
