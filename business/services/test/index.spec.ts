import { TestService } from '.';
import { type IDatabase } from '../interface';

class TestDatabase implements IDatabase {
	query: () => Promise<void>;
}

describe('test service tests', () => {
	let serviceInstance: TestService;

	beforeEach(() => {
		serviceInstance = new TestService(new TestDatabase());
	});

	describe('get', () => {
		it('should return a valid object', async () => {
			const res = await serviceInstance.get();
			expect(res).toEqual({
				name: 'admin',
			});
		});
	});
});
