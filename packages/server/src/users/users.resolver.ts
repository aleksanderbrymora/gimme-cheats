import { Args, Query, Resolver } from '@nestjs/graphql';
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
}
