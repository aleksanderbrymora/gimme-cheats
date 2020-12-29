import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Base } from 'src/base/base.entity';

@ObjectType()
export class User extends Base {
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
