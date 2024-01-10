export function isError<T>(res: T | Error): res is Error {
	return res instanceof Error;
}

export function tryCatch<T>(fn: Function): T | Error {
	let res: T;
	try {
		res = fn();
	} catch (_err: unknown) {
		const err = _err as Error;
		return err;
	}
	return res;
}

export async function tryCatchAsync<T>(fn: Function): Promise<T | Error> {
	let res: T;
	try {
		res = await fn();
	} catch (_err: unknown) {
		const err = _err as Error;
		return err;
	}
	return res;
}
