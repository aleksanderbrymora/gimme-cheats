import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserInput } from './create-user.input';

@Injectable()
export class UsersService {
  private logger = new Logger('UserRepository');
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { username } });
  }

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const { username, id, email } = createUserInput;
    const user = this.userRepository.create({
      username,
      email,
      superTokenID: id,
    });

    this.logger.log('Created a user with this data: ' + JSON.stringify(user));

    return this.userRepository.save(user);
  }

  async getBySuperTokenID(id: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { superTokenID: id } });
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find({});
  }
}
