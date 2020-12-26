import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class User {
  @Field()
  username: string;

  @Field(() => Int, { description: 'ID from the PG database' })
  id: number;

  @Field({ description: 'ID from the supertokens auth service' })
  superTokenID: string;

  @IsEmail()
  @Field()
  email: string;
}
