import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://anusornsriprom44:AMgxxhOKIHmlXUua@cluster0.bmiggf1.mongodb.net/'),

    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   url: 'mongodb+srv://anusornsriprom44:AMgxxhOKIHmlXUua@cluster0.bmiggf1.mongodb.net/',
    //   // database:"totalCalendar",
    //   database: "supervision",
    //   synchronize: true,
    //   logging: true,
    //   entities: [
    //     Users,

    //   ],
    // }),
    // MongooseModule.forRoot('mongodb+srv://anusornsriprom44:AMgxxhOKIHmlXUua@cluster0.bmiggf1.mongodb.net/'),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
