import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { TASK_MANAGEMENT_API_CONFIG } from '@task-management-api';
import { routes } from './app.routes';
import { EnvironmentService } from './core/environment/environment.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: TASK_MANAGEMENT_API_CONFIG,
      useFactory: (envService: EnvironmentService) => ({ baseUrl: envService.taskManagementApiBaseUrl }),
      deps: [EnvironmentService],
    },
  ],
};
