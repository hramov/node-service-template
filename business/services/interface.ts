export interface IDatabase {
	query: () => Promise<void>;
}

export interface ILogger {
	query: () => Promise<void>;
}
