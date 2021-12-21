import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<string, Date> {
    description = 'Date custom scalar type';

    parseValue(value: any): Date {
        return new Date(value);
    }

    serialize(value: Date): string {
        return value.toISOString();
    }

    parseLiteral(ast: ValueNode): Date {
        if (ast.kind === Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    }
}
