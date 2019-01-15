import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index} from "typeorm";
import { Show } from "./Show";
import { User } from "./User";

@Entity()
@Index((relation: Opinion) => [relation.show, relation.user], { unique: true })
export class Opinion {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Show, show => show.opinions)
  show: Show;

  @ManyToOne(() => User, user => user.opinions)
  user: User;

  @Column()
  seen: boolean;

  @Column({ enum: ['dislike', 'like', 'love'] })
  opinion: 'dislike' | 'like' | 'love';

}
