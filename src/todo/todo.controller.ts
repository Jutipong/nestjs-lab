import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
	constructor(private todoService: TodoService) { }

	@Get()
	getTodo() {
		return this.todoService.getTodo()
	}

	@Post()
	postTodo(@Body("name") name: string, @Body("last") last: string) {
		return this.todoService.postTodo(name, last)
	}

	@Delete("/:id")
	deleteTodoById(@Param("id") id: string) {
		return this.todoService.deleteTodoById(id)
	}
}
