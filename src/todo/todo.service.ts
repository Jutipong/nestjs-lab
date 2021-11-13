import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class TodoService {
	constructor(
		@InjectRepository(Todo)
		private readonly todoRepository: Repository<Todo>,
	) { }

	getTodo() {
		return this.todoRepository.find()
	}

	async postTodo(name: string, last: string) {
		const todo = new Todo()
		todo.name = name
		todo.last = last
		await this.todoRepository.save(todo)
		return todo
	}

	async deleteTodoById(id: string) {
		const item = await this.todoRepository.findOne({ id: id })
		if (!item) {
			return `data not found by id: ${id}`
		}

		await this.todoRepository.delete({ id: id })

		return await this.todoRepository.find()
	}
}
