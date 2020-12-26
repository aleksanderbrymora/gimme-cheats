import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field()
  username: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  id: string;
}
