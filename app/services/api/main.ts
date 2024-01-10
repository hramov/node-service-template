import { configDotenv } from 'dotenv';
import pino from 'pino';
import { readConfig } from '../../../foundation/config';
import { isError } from '../../../foundation/error/trycatch';
import { registerOpenTelemetry } from '../../../foundation/metrics';
import type { Config } from './config';
import { startServer } from './v1/api';

async function main(): Promise<void> {
	// read config
	configDotenv();
	const cfg = (await readConfig(process.env.CONFIG_PATH)) as Config;

	// set up logger
	const log = pino({
		name: cfg.app.name,
		level: cfg.log.level,
	});
	log.info('set up config and logger');

	// set up metrics
	const otel = registerOpenTelemetry();
	if (isError(otel)) {
		log.error(otel.stack);
		process.exit(1);
	}
	log.info('register OpenTelementry');

	// set up db connection(s)
	// const pg = new Postgres(
	// 	cfg.db.postgres.host,
	// 	cfg.db.postgres.port,
	// 	cfg.db.postgres.user,
	// 	cfg.db.postgres.password,
	// 	cfg.db.postgres.database,
	// );

	// const pool = await pg.connect();

	// if (isError(pool)) {
	// 	log.error(pool.stack);
	// 	process.exit(1);
	// }
	log.info('connected to database');

	// set up server
	const server = await startServer(cfg.api.port, null, log);
	if (isError(server)) {
		log.error(server.stack);
		process.exit(1);
	}
}

// eslint-disable-next-line no-console
main().catch((err) => console.log(err));
