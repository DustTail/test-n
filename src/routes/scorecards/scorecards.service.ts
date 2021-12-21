import { BadRequestException, Injectable } from '@nestjs/common';
import { NewScorecardInput, Scorecard } from './dtos';

const MOCK = {
    id: 42,
    createdAt: new Date(),
    updatedAt: new Date(),
    goal: 'Some goal',
    departmentId: 42,
    divisionId: 42,
    year: '2022',
    quarter: 1
};

@Injectable()
export class ScorecardsService {

    async findOne(...args: any) {
        return MOCK;
    }

    async findMany(...args: any) {
        return MOCK;
    }

    async create(...args: any) {
        return MOCK;
    }

    async update(...args: any) {
        return MOCK;
    }

    async delete(...args: any) {
        return true;
    }

    async checkScorecardBeforeCreate(newScorecardData: NewScorecardInput) {
        const {
            departmentId,
            divisionId,
            year,
            quarter
        } = newScorecardData;

        const scorecards = await this.findOne(departmentId, divisionId, year, quarter);

        if (scorecards) {
            throw new BadRequestException('Scorecard with same data already exist');
        }
    }

    async checkScorecardBeforeUpdate(scorecard: Scorecard, newScorecardData: NewScorecardInput) {
        if (scorecard.departmentId !== newScorecardData.departmentId) {
            throw new BadRequestException('Cannot change department');
        }
        if (scorecard.divisionId !== newScorecardData.divisionId) {
            throw new BadRequestException('Cannot change division');
        }
    }
}
