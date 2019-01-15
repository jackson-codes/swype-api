import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToMany } from "typeorm";
import { Opinion } from "./Opinion";

@Entity()
export class Show {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Opinion, opinion => opinion.show)
  opinions: Opinion[];

}
