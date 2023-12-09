import { Module } from '@nestjs/common';
import {
  AppController,
  UserController,
  RouteController,
} from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, RouteController],
  providers: [AppService],
})
export class AppModule {}
