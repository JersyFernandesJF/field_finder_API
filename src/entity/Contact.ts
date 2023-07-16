import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, RelationId } from "typeorm";
import { User } from "./User";
import { Institution } from "./Institution";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "id_user", referencedColumnName: "id" })
    user: User | Institution;
    
    @Column()
    number_phone: string;
}