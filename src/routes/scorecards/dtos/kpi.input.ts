import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class KPIInput {

    @Field()
        title: string;

    @Field()
        score: number;
}
