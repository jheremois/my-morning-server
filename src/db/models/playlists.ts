import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class playlists extends BaseEntity {
	@PrimaryColumn()
    id: string;
	
	@Column()
	href: string;
	
	@Column()
	images: string;

	@Column()
	name: string;
}