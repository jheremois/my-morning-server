import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class tasks extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
    id: number;
	
	@Column()
	task: string;
	
	@Column({ type: 'bool', default: () => false })
	task_done: boolean;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
	upload_date: string;
}