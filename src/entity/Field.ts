import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Institution } from "./Institution";

@Entity()
export class Field {

     @PrimaryGeneratedColumn()
     id : number
     
     @Column()
     name : String

     @ManyToOne(()=> Institution)
     @JoinColumn({  name: "id_institution", referencedColumnName: "id" })
     id_institution : number;

    @Column()
    price : number

    @Column()
    availability : boolean
    
    @Column({ nullable: true })
    fieldDetails : string;

    @Column("simple-array", { nullable: true })
    fieldRules: string[];
    
    @Column()
    length: number;

    @Column()
    width: number;

}
