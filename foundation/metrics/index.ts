import { NodeSDK } from '@opentelemetry/sdk-node';
import { tryCatch } from '../error/trycatch';

export function registerOpenTelemetry(): void | Error {
	return tryCatch(() => {
		const sdk = new NodeSDK({
			// traceExporter: new ConsoleSpanExporter(),
			// metricReader: new PeriodicExportingMetricReader({
			// 	exporter: new ConsoleMetricExporter(),
			// }),
			// instrumentations: [getNodeAutoInstrumentations()],
		});

		return sdk.start();
	});
}
