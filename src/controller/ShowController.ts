import {Controller, Mutation, Query} from "vesper";
import {EntityManager, FindManyOptions} from "typeorm";
import { ShowsArgs } from "../args/ShowArgs";
import { Show } from "../entity/Show";

@Controller()
export class ShowsController {

    constructor(private entityManager: EntityManager) {
    }

    @Query()
    users(args: ShowsArgs): Promise<Show[]> {

        const findOptions: FindManyOptions = {};
        if (args.limit)
            findOptions.skip = args.limit;
        if (args.offset)
            findOptions.take = args.offset;

        return this.entityManager.find(Show, findOptions);
    }

    @Query()
    show({ id }: { id: number }): Promise<Show> {
        return this.entityManager.findOne(Show, id);
    }

}