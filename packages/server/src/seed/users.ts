import { Connection } from 'typeorm';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';
import { internet, random } from 'faker';

export const seedUsers = async (connection: Connection): Promise<any> => {
  console.log('=============Seeding users==============');
  const userService = new UsersService(connection.getRepository(User));

  const fakeUser = () => ({
    email: internet.email(),
    username: internet.userName(),
    id: random.uuid(),
  });

  return Promise.all(
    Array(10)
      .fill(true)
      .map(() => userService.createUser(fakeUser())),
  );
};
