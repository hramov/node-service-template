import { Pool } from 'pg';
import { type IDatabase } from '../../business/services/interface';
import { tryCatchAsync } from '../error/trycatch';

export class Postgres implements IDatabase {
	constructor(
		private readonly host: string,
		private readonly port: number,
		private readonly user: string,
		private readonly password: string,
		private readonly database: string,
	) {}

	public async connect(): Promise<Pool | Error> {
		return await tryCatchAsync<Pool>(async () => {
			const pool = new Pool({
				host: this.host,
				port: this.port,
				user: this.user,
				password: this.password,
				database: this.database,
				max: 20,
				idleTimeoutMillis: 30000,
				connectionTimeoutMillis: 2000,
			});
			await pool.query('select 1'); // check the connection
		});
	}

	public async query(): Promise<void> {}
}
