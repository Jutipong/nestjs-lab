import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Todo {

	@ApiProperty()
	@PrimaryColumn()
	id: string

	@ApiProperty()
	@Column({ type: 'nvarchar' })
	name: string

	@ApiProperty()
	@Column({ length: 30 })
	last: string

	@ApiProperty()
	@Column({ name: 'age', type: 'decimal', default: 0 })
	agex: number
}