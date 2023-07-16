import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User";
import { Sport } from "./Sport";

@Entity()
export class UserSport {

     @PrimaryGeneratedColumn()
     id : number

     @ManyToOne(()=> User)
     @JoinColumn({  name: "id_user", referencedColumnName: "id" })
     id_user : number;

     @ManyToOne(()=> Sport)
     @JoinColumn({  name: "id_sport", referencedColumnName: "id" })
     id_sport : number;

       
}
