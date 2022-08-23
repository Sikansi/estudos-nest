import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';

@Module({
  controllers: [AppController, AdminController, AccountController],
  providers: [AppService],
})
export class AppModule {}
