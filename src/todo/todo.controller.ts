import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@ApiTags("Todo")
@Controller()
export class TodoController {
	constructor(private todoService: TodoService) { }

	// @ApiOperation({ summary: 'Get All' })
	@Get()
	@ApiResponse({ status: 200, description: 'ok', type: Todo })
	getTodo() {
		return this.todoService.getTodo()
	}

	@Post()
	@ApiResponse({ status: 200, description: 'ok', type: Todo })
	postTodo(@Body("name") name: string, @Body("last") last: string) {
		return this.todoService.postTodo(name, last)
	}

	@Delete("/:id")
	@ApiResponse({ status: 200, description: 'ok', type: String })
	deleteTodoById(@Param("id") id: string) {
		return this.todoService.deleteTodoById(id)
	}
}
