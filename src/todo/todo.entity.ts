import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Todo {

	@PrimaryColumn()
	id: string

	@Column({ type: 'nvarchar' })
	name: string

	@Column({ length: 30 })
	last: string

	@Column({ name: 'age', type: 'decimal', default:0 })
	agex: number
}