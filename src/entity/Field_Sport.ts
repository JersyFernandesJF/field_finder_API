import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Field } from "./Field";
import { Sport } from "./Sport";

@Entity()
export class FieldSports {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Field)
  @JoinColumn({ name: "id_field", referencedColumnName: "id" }) 
  field: Field; 

  @ManyToOne(() => Sport)
  @JoinColumn({ name: "id_sport", referencedColumnName: "id" }) 
  sport: Sport; 
}

