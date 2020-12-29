import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { CreateUserInput } from './create-user.input';

@Injectable()
export class UsersService {
  private logger = new Logger('UserRepository');
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const { username, id, email } = createUserInput;
    const user = this.userRepository.create({
      username,
      email,
      superTokenID: id,
    });

    this.logger.log('Created a user with this data: ' + JSON.stringify(user));

    return this.userRepository.save(user);
  }

  async getBySuperTokenID(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { superTokenID: id } });
  }

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }
}
