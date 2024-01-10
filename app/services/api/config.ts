interface App {
	name: string;
}

interface Log {
	level: string;
}

interface Api {
	port: number;
}

interface Postgres {
	host: string;
	port: number;
	user: string;
	password: string;
	database: string;
}

interface Db {
	postgres: Postgres;
}

export interface Config {
	app: App;
	log: Log;
	api: Api;
	db: Db;
}
