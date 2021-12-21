import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DateScalar } from './common/scalars';
import { ScorecardsModule } from './routes/scorecards/scorecards.module';

@Module({
    imports: [
        ScorecardsModule,
        GraphQLModule.forRoot({
            debug: process.env.NODE_ENV !== 'production',
            playground: false,
            plugins: [process.env.NODE_ENV !== 'production' ? ApolloServerPluginLandingPageLocalDefault() : null],
            sortSchema: true,
            autoSchemaFile: 'graphql/schema.graphql'
        }),
    ],
    providers: [DateScalar]
})
export class AppModule {}
