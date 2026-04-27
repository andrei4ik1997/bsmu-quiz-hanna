import { LocationStrategy, NoTrailingSlashPathLocationStrategy, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import type { ApplicationConfig } from '@angular/core';
import {
	provideBrowserGlobalErrorListeners,
	provideStabilityDebugging,
	provideZonelessChangeDetection,
} from '@angular/core';

import {
	provideAppHttpClient,
	provideAppRouter,
	provideLocaleId,
	provideNgswWorker,
	provideNgZorro,
	provideServices,
} from './app.providers';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideStabilityDebugging(),
		provideZonelessChangeDetection(),
		provideAppHttpClient(),
		provideAppRouter(),
		provideServices(),
		provideNgZorro(),
		provideNgswWorker(),
		provideLocaleId(),
		{ provide: LocationStrategy, useClass: NoTrailingSlashPathLocationStrategy },
	],
};
