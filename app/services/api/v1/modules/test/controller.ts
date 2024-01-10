import { type Logger } from 'pino';
import { TestService } from '../../../../../../business/services/test';
import { type ControllerType, type ServerInstance } from '../../interface';
import { Querystring, Test, type IQuerystring, type TestType } from './dto/test.dto';

export function testController(db: any, log: Logger): ControllerType {
	const service = new TestService(db);
	return async (server: ServerInstance): Promise<void> => {
		server.get<{
			Querystring: IQuerystring;
			Response: TestType;
		}>(
			'/',
			{
				schema: {
					description: 'Get user',
					tags: ['test'],
					summary: 'qwerty',
					querystring: Querystring,
					response: { 200: Test },
				},
			},
			async (req, res) => {
				return await service.get();
			},
		);
	};
}
