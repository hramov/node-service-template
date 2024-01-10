import type { IDatabase, ILogger } from '../../../../business/services/interface';

export class PostgresMock implements IDatabase {
	public async query(): Promise<void> {}
}

export class LoggerMock implements ILogger {
	public async query(): Promise<void> {}
}
