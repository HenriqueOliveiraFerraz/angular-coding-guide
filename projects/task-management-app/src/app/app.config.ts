import {
  ApplicationConfig,
  EnvironmentProviders,
  makeEnvironmentProviders,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { TASK_MANAGEMENT_API_CONFIG } from '@task-management-api';
import { EnvironmentService } from '@task-management-app/core/environment/environment.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTaskManagementApiConfig(),
  ],
};

function provideTaskManagementApiConfig(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: TASK_MANAGEMENT_API_CONFIG,
      useFactory: (envService: EnvironmentService) => ({ baseUrl: envService.taskManagementApiBaseUrl }),
      deps: [EnvironmentService],
    },
  ]);
}
