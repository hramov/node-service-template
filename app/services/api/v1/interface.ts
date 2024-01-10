import { type TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import type { FastifyInstance } from 'fastify';
import type { IncomingMessage, Server, ServerResponse } from 'http';
import type { Logger } from 'pino';

export type ServerInstance = FastifyInstance<
	Server,
	IncomingMessage,
	ServerResponse<IncomingMessage>,
	Logger,
	TypeBoxTypeProvider
>;

export const enum Methods {
	Get = 'GET',
	Post = 'POST',
	Put = 'PUT',
	Delete = 'DELETE',
}

export type ControllerType = (server: ServerInstance) => Promise<void>;

export type ControllerFunction = <S, D>(service: S, db: D, log: Logger) => ControllerType;
