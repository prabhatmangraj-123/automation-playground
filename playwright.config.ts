import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  retries: 1,

  reporter: 'html',

  timeout: 30000,

  use: {
    baseURL: process.env.BASE_URL,

    trace: 'on-first-retry',

    video: 'retain-on-failure',

    screenshot: 'only-on-failure',

    headless: !!process.env.CI,
  },

  projects: [

    {
      name: 'setup',

      testMatch: /auth\.setup\.spec\.ts/,

      use: {
        storageState: undefined,
      },
    },

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },

      dependencies: ['setup'],
    },

    /*
    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox'],
        storageState: 'auth.json',
      },

      dependencies: ['setup'],
    },

    {
      name: 'webkit',

      use: {
        ...devices['Desktop Safari'],
        storageState: 'auth.json',
      },

      dependencies: ['setup'],
    },
    */

  ],

});