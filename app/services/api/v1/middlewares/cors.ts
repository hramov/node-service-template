import cors from 'cors';

export const corsMiddleware = cors({
	allowedHeaders: '*',
	methods: '*',
	origin: '*',
	exposedHeaders: '*',
});
