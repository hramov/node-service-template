import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { type ServerInstance } from '../../app/services/api/v1/interface';

export async function registerSwagger(server: ServerInstance): Promise<void> {
	await server.register(fastifySwagger, {
		swagger: {
			info: {
				title: 'GVC service',
				description: 'Testing the Fastify swagger API',
				version: '0.1.0',
			},
			externalDocs: {
				url: 'https://swagger.io',
				description: 'Find more info here',
			},
			host: 'localhost:3000',
			schemes: ['http'],
			consumes: ['application/json'],
			produces: ['application/json'],
		},
	});

	await server.register(fastifySwaggerUi, {
		routePrefix: '/docs',
		uiConfig: {
			docExpansion: 'full',
			deepLinking: false,
		},
		staticCSP: true,
		transformSpecificationClone: true,
	});
}
