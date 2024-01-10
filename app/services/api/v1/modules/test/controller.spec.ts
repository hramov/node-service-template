import pino from 'pino';
import { isError } from '../../../../../../foundation/error/trycatch';
import { PostgresMock } from '../../../__test__/mock';
import { buildServer } from '../../api';
import { type ServerInstance } from '../../interface';

const log = pino({
	name: 'API test',
	level: 'debug',
});

describe('Test controller', () => {
	let server: ServerInstance;

	beforeAll(async () => {
		const serverInstance = await buildServer(3000, new PostgresMock(), log);
		expect(serverInstance).not.toBeInstanceOf(Error);
		if (isError(serverInstance)) return;
		server = serverInstance;
	});

	it('GET `/` route', async () => {
		try {
			const res = await server.inject({ method: 'GET', url: '/test/?name=admin' });
			expect(JSON.parse(res.payload)).toEqual({ name: 'admin' });
		} catch (err) {
			expect(err).not.toBeDefined();
		}
	});
});
