import {Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToMany, ManyToOne, JoinTable, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Group {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adminId: number;
  @ManyToOne(() => User, user => user.adminOf)
  @JoinColumn({ name: 'adminId' })
  admin: User;

  @Column({ unique: true })
  key: string;

  @Column()
  sharable: boolean;

  @ManyToMany(() => User, user => user.groups)
  @JoinTable()
  members: User[];

}
