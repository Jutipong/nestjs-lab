import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scheduling_Daily {

	@PrimaryGeneratedColumn()
	Id: number

	@Column({ type: 'nvarchar', length: 255 })
	Name: string

	@Column({ type: 'nvarchar', length: 255 })
	Description: string

	@Column({ type: 'time' })
	Tiem: string

	@Column({ type: 'boolean' })
	IsAcitve: boolean
}

@Entity()
export class Scheduling_Weekly {

	@PrimaryGeneratedColumn()
	Id: number

	@Column({ type: 'nvarchar', length: 255 })
	Name: string

	@Column({ type: 'nvarchar', length: 255 })
	Description: string

	@Column({ type: 'nvarchar' })
	Day: string

	@Column({ type: 'time' })
	Tiem: string

	@Column({ type: 'boolean' })
	IsAcitve: boolean
}


@Entity()
export class Scheduling_Monthly {

	@PrimaryGeneratedColumn()
	Id: number

	@Column({ type: 'nvarchar', length: 255 })
	Name: string

	@Column({ type: 'nvarchar', length: 255 })
	Description: string

	@Column({ type: 'nvarchar' })
	Day: string

	@Column({ type: 'time' })
	Tiem: string

	@Column({ type: 'boolean' })
	IsAcitve: boolean
}
