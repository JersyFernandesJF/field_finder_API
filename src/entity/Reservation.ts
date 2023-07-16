import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Event } from "./Event";

@Entity()
export class Reservation {
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Event)
    @JoinColumn({ name: "id_event", referencedColumnName: "id" })
    id_event: Event;

    @Column({ type: "timestamp" })
    date: Date;
    
    @Column()
    total_payment: number
}