import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Language {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
