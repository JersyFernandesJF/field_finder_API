import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Organization {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, unique: true}) 
    id_firebase: string;

    @Column()
    name: string

    @Column({ nullable: false, unique: true})
    nif: number
       
}
