import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToMany } from "typeorm";
import { Group } from "./Group";
import { Opinion } from "./Opinion";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Group, group => group.members)
  groups: Group[];

  @OneToMany(() => Opinion, opinion => opinion.user)
  opinions: Opinion[];

  @OneToMany(() => Group, group => group.admin)
  adminOf: Group;
}
