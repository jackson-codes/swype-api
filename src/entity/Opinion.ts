import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, JoinColumn} from "typeorm";
import { Show } from "./Show";
import { User } from "./User";

export type EmotionalOpinion = 'dislike' | 'like' | 'love';

@Entity()
@Index((relation: Opinion) => [relation.show, relation.user], { unique: true })
export class Opinion {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  showId: number;
  @ManyToOne(() => Show, show => show.opinions)
  @JoinColumn({ name: 'showId' })
  show: Show;

  @Column()
  userId: number;
  @ManyToOne(() => User, user => user.opinions)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  seen: boolean;

  @Column({ enum: ['dislike', 'like', 'love'] })
  opinion: EmotionalOpinion;

}
