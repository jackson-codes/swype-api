import {Controller, Mutation, Query} from "vesper";
import {EntityManager, FindManyOptions} from "typeorm";
import { Opinion } from "../entity/Opinion";
import { OpinionSaveArgs } from "../args/OpinionArgs";

@Controller()
export class OpinionController {

    constructor(private entityManager: EntityManager) {
    }

    @Query()
    opinion({ id }: { id: number }): Promise<Opinion> {
        return this.entityManager.findOne(Opinion, id);
    }

    @Mutation()
    async opinionSave(args: OpinionSaveArgs): Promise<Opinion> {
        const opinion = (await this.entityManager.findOne(Opinion, null, {
          where: {
            userId: args.userId,
            showId: args.showId
          } 
        })) || new Opinion();
        opinion.seen = args.seen;
        opinion.opinion = args.opinion;
        return this.entityManager.save(opinion);
    }

}