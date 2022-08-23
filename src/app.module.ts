import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
//import { DatabaseModule } from './database/database.module';
//import { User } from './users/entities/user.entity';

@Module({
  controllers: [AppController, AdminController, AccountController],
  providers: [AppService],
  // imports: [DatabaseModule.forRoot([User])],
  // exports: [DatabaseModule],
})
export class AppModule {}
