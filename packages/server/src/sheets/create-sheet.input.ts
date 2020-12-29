import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Length, MinLength } from 'class-validator';
import { Sheet } from './sheet.model';

@InputType()
export class CreateSheetInput implements Partial<Sheet> {
  @Field(() => Boolean, { defaultValue: false })
  containsProfanity: boolean;

  @Length(1, 50)
  @Field()
  title: string;
}
