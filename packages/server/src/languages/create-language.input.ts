import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateLanguageInput {
  @Field()
  name: string;

  @Field()
  emoji: string;
}
