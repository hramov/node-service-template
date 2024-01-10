import { type IDatabase } from '../interface';
import { type TestModel } from './model';

export class TestService {
	constructor(private readonly db: IDatabase) {}

	public async get(): Promise<TestModel> {
		return {
			name: 'admin',
		};
	}
}
