import { Type, type Static } from '@sinclair/typebox';

export const Test = Type.Object({
	name: Type.String(),
	mail: Type.Optional(Type.String({ format: 'email' })),
});

export const Querystring = Type.Object({
	name: Type.String(),
});

export type TestType = Static<typeof Test>;

export interface IQuerystring {
	name: string;
}
