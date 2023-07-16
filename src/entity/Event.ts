import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { User } from "./User";
import { Field } from "./Field";

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User)
    @JoinColumn({ name: "id_user", referencedColumnName: "id" })
    id_user: User;

    @Column()
    name_event: string
    
    @ManyToOne(() => Field)
    @JoinColumn({ name: "id_field", referencedColumnName: "id"})
    id_field: Field;

    @Column({ type: "timestamp" })
    date: Date;

    @Column()
    minGuest: number;
    
    @Column()
    maxGuest: number;
    
    @Column({default: false })
    repeat: boolean;
    
    @Column({ type: "time" })
    start_time: number;
    
    @Column({ type: "time" })
    end_time: number;
   
}
