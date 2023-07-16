import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Organization } from "./Organization";

@Entity()
export class Institution {

    @PrimaryGeneratedColumn()
     id: number

     @ManyToOne(()=> Organization)
     @JoinColumn({name: "id_organization", referencedColumnName: "id" })
     @Column()
     id_organization: number;

    @Column()
    name: string

    @Column("numeric")
    latitude: number
    
    @Column("numeric")
    longitude: number

    @Column()
    email: string
    
    @Column()
    address: string
       
}
