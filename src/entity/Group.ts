import {Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToMany, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity()
export class Group {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, user => user.adminOf)
  admin: User;

  @Column({ unique: true })
  key: string;

  @Column()
  sharable: boolean;

  @ManyToMany(() => User, user => user.groups)
  members: User[];

}
