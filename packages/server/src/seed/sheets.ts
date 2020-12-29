import { random } from 'faker';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
import { Connection } from 'typeorm';
import { Sheet } from '../sheets/sheet.model';
import { SheetsService } from '../sheets/sheets.service';
import { CreateSheetInput } from '../sheets/create-sheet.input';

export const seedSheets = async (connection: Connection): Promise<any> => {
  console.log('=============Seeding Sheets==============');
  const userService = new UsersService(connection.getRepository(User));
  const sheetService = new SheetsService(connection.getRepository(Sheet));

  const users = await userService.findAllUsers();

  const fakeSheet = (user: User): CreateSheetInput => ({
    containsProfanity: random.boolean(),
    title: random.word(),
    forkedTimes: random.number(100),
    lookedAtTimes: random.number(100),
    points: random.number(100),
    user: user,
  });

  return Promise.all(
    users.map(
      async (u) =>
        await Promise.all(
          Array(random.number(5))
            .fill(true)
            .map(() => sheetService.createSheet(fakeSheet(u))),
        ),
    ),
  );
};
