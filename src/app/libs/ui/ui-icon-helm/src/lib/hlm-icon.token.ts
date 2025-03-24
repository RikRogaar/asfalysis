import { InjectionToken, ValueProvider, inject } from '@angular/core';
import type { IconSize } from './hlm-icon.directive';

export interface HlmIconConfig {
	size: IconSize;
	color: string;
}

const defaultConfig: HlmIconConfig = {
	size: 'base',
	color: 'theme-red-500',
};

const HlmIconConfigToken = new InjectionToken<HlmIconConfig>('HlmIconConfig');

export function provideHlmIconConfig(config: Partial<HlmIconConfig>): ValueProvider {
	return { provide: HlmIconConfigToken, useValue: { ...defaultConfig, ...config } };
}

export function injectHlmIconConfig(): HlmIconConfig {
	return inject(HlmIconConfigToken, { optional: true }) ?? defaultConfig;
}
