import { Field, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Base } from '../base/base.entity';

@ObjectType()
@Entity()
export class Language extends Base {
  @Length(1, 50)
  @Field()
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Field()
  @Column()
  emoji: string;
}
