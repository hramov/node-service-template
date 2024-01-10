import { readFile } from 'fs/promises';
import { load } from 'js-yaml';

export async function readConfig(filepath?: string): Promise<unknown> {
	return load(await readFile(filepath ?? 'app/config.yml', 'utf8'));
}
