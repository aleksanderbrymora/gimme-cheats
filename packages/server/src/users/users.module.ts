import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { SheetsService } from '../sheets/sheets.service';
import { Sheet } from 'src/sheets/sheet.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Sheet])],
  providers: [UsersResolver, UsersService, SheetsService],
  exports: [UsersService],
})
export class UsersModule {}
