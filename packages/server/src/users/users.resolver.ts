import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { User } from './user.model';
import { UsersService } from './users.service';
import { Sheet } from '../sheets/sheet.model';
import { SheetsService } from '../sheets/sheets.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly sheetService: SheetsService,
  ) {}

  @Query(() => Boolean)
  async isUsernameFree(@Args('username') username: string): Promise<Boolean> {
    const user = await this.usersService.getByUsername(username);
    return !user;
  }

  @Query(() => User, { nullable: true })
  async findUserBySuperTokenID(@Args('id') id: string): Promise<User | null> {
    return this.usersService.getBySuperTokenID(id);
  }

  @Query(() => [User], { name: 'users' })
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }

  @ResolveField('sheets', () => [Sheet])
  async getSheets(@Parent() user: User): Promise<Sheet[]> {
    const { id } = user;
    return this.sheetService.getAllWithUserID(id);
  }
}
