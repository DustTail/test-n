import { Module } from '@nestjs/common';
import { ScorecardsResolver } from './scorecards.resolver';
import { ScorecardsService } from './scorecards.service';

@Module({
    providers: [
        ScorecardsResolver,
        ScorecardsService
    ],
})
export class ScorecardsModule {}
