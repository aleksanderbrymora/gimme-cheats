import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => Boolean)
  async isUsernameFree(@Args('username') username: string): Promise<Boolean> {
    const user = await this.usersService.getByUsername(username);
    return !user;
  }

  @Query(() => User, { nullable: true })
  async findUserBySuperTokenID(@Args('id') id: string): Promise<User | null> {
    return this.usersService.getBySuperTokenID(id);
  }

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }
}
