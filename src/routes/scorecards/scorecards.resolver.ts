import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { KPIInput, NewScorecardInput, Scorecard } from './dtos';
import { ScorecardsService } from './scorecards.service';

@Resolver(() => Scorecard)
export class ScorecardsResolver {
    constructor(private readonly scorecardsService: ScorecardsService) {}

    @Query(() => [Scorecard])
    async getScorecards(
        @Args('year') year: string,
        @Args('quarter', { type: () => Int }) id: number
    ): Promise<[Scorecard]> {
        let scorecards;

        scorecards = await this.scorecardsService.findMany(year, id);

        return [scorecards];
    }

    @Query(() => Scorecard)
    async getScorecardDetails(
        @Args('year') year: string,
        @Args('quarter', { type: () => Int }) id: number
    ): Promise<Scorecard> {
        let scorecard;

        scorecard = await this.scorecardsService.findOne(year, id);

        return scorecard;
    }

    @Mutation(() => Scorecard)
    async createScorecard(
        @Args('newScorecardData') newScorecardData: NewScorecardInput,
        @Args('kpis', { type: () => [KPIInput] }) kpis: KPIInput[],
    ): Promise<Scorecard> {
        let scorecard;

        await this.scorecardsService.checkScorecardBeforeCreate(newScorecardData);

        scorecard = await this.scorecardsService.create(newScorecardData, kpis);

        return scorecard;
    }

    @Mutation(() => Scorecard)
    async updateScorecard(
        @Args('newScorecardData') newScorecardData: NewScorecardInput,
        @Args('kpis', { type: () => [KPIInput] }) kpis: KPIInput[],
    ): Promise<Scorecard> {
        let oldScorecard, updatedScorecard;

        oldScorecard = await this.scorecardsService.findOne(newScorecardData.departmentId, newScorecardData.divisionId);
        await this.scorecardsService.checkScorecardBeforeUpdate(oldScorecard, newScorecardData);

        updatedScorecard = await this.scorecardsService.update(newScorecardData, kpis);

        return updatedScorecard;
    }

    @Mutation(() => Boolean)
    async deleteScorecard(
        @Args('id', { type: () => Int }) id: number
    ): Promise<boolean> {
        await this.scorecardsService.delete(id);
        // KPIs will be cascaded

        return true;
    }
}
