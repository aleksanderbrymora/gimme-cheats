import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Base } from 'src/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class User extends Base {
  @Field()
  @Column({ unique: true, type: 'varchar', length: 50 })
  username: string;

  @Field({ description: 'ID from the supertokens auth service' })
  @Column()
  superTokenID: string;

  @IsEmail()
  @Field()
  @Column({ unique: true, type: 'varchar', length: 100 })
  email: string;
}
