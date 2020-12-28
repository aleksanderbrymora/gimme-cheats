import { Column, Entity } from 'typeorm';
import { Base } from '../base/base.entity';

@Entity()
export class UserEntity extends Base {
  @Column({ unique: true, type: 'varchar', length: 50 })
  username: string;

  @Column({ unique: true, type: 'varchar', length: 50 })
  email: string;

  @Column()
  superTokenID: string;
}
