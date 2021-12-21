import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewScorecardInput {

    @Field(() => Int)
        departmentId: number;

    @Field(() => Int)
        divisionId: number;

    @Field()
        goal: string;

    @Field()
        year: string;

    @Field()
        quarter: number;
}
