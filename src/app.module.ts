import { SchedulingModule } from './scheduling/scheduling.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

// entity
import { Todo } from './todo/todo.entity';
import { Scheduling_Daily, Scheduling_Weekly, Scheduling_Monthly } from './scheduling/scheduling.entity';


@Module({
  imports: [
    SchedulingModule,
    SchedulingModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [
        Todo,
        Scheduling_Daily, Scheduling_Weekly, Scheduling_Monthly
      ],
      synchronize: process.env.NODE_ENV != 'production',
    }),
    // TypeOrmModule.forFeature([Todo]),
    ScheduleModule.forRoot(),
    SchedulingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
