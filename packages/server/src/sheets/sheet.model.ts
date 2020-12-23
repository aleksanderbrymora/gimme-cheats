import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Sheet {
  @Field((type) => Int)
  id: number;

  @Field()
  content: string;
}
