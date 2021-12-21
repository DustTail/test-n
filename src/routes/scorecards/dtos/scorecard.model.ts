import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Scorecard {

    @Field(() => Int)
        id: number;

    @Field()
        createdAt: Date;

    @Field()
        updatedAt: Date;

    @Field()
        goal: string;

    @Field(() => Int)
        departmentId: number;

    @Field(() => Int)
        divisionId: number;

    @Field()
        year: string;

    @Field()
        quarter: number;

}
