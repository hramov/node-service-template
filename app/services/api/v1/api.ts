import fastifyHelmet from '@fastify/helmet';
import fastifyMiddie from '@fastify/middie';
import { type TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastify from 'fastify';
import { type Logger } from 'pino';
import { v4 as uuidv4 } from 'uuid';
import { type IDatabase } from '../../../../business/services/interface';
import { isError, tryCatch, tryCatchAsync } from '../../../../foundation/error/trycatch';
import { registerSwagger } from '../../../../foundation/swagger';
import { type ServerInstance } from './interface';
import { corsMiddleware } from './middlewares/cors';
import { testController } from './modules/test/controller';

export async function buildServer(port: number, db: IDatabase, log: Logger): Promise<ServerInstance | Error> {
	const server: ServerInstance = fastify({
		genReqId: (): string => {
			return uuidv4();
		},
		logger: log,
	}).withTypeProvider<TypeBoxTypeProvider>();

	await server.register(fastifyMiddie);
	server.use(corsMiddleware);

	await server.register(fastifyHelmet, { global: true });

	await registerSwagger(server);

	log.info('Registering routes');
	await server.register(testController(db, log), {
		prefix: '/test',
	});

	server.addHook('onError', async (request, reply, error) => {
		// Useful for custom error logging
		// You should not use this hook to update the error
	});

	await server.ready();

	const sw = tryCatch(server.swagger);
	if (isError(sw)) {
		return sw;
	}

	return server;
}

export async function startServer(port: number, db: any, log: Logger): Promise<void | Error> {
	return await tryCatchAsync(async () => {
		log.info('Building server');
		const server = await buildServer(port, db, log);
		if (isError(server)) {
			return server;
		}

		log.info('Starting server');
		return server.listen({ port }, (err: Error | null) => {
			if (err !== null && err !== undefined) {
				log.error(err);
				return err;
			}
			return;
		});
	});
}
