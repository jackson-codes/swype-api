import {Controller, Mutation, Query} from "vesper";
import {EntityManager, FindManyOptions} from "typeorm";
import { GroupsArgs } from "../args/GroupArgs";
import { Group } from "../entity/Group";

@Controller()
export class GroupController {

    constructor(private entityManager: EntityManager) {
    }

    @Query()
    groups(args: GroupsArgs): Promise<Group[]> {

        const findOptions: FindManyOptions = {};
        if (args.limit)
            findOptions.skip = args.limit;
        if (args.offset)
            findOptions.take = args.offset;

        return this.entityManager.find(Group, findOptions);
    }

    @Query()
    group({ id }: { id: number }): Promise<Group> {
        return this.entityManager.findOne(Group, id);
    }
}