import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// entity
import { Todo } from './todo/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [Todo],
      synchronize: process.env.NODE_ENV != 'production',
    }),
    TypeOrmModule.forFeature([Todo])
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule { }
