import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, unique: true}) 
    id_firebase: string;

    @Column()
    name: string

    @Column({nullable: true, type: "date" })
    birth_date: Date;
   
}
