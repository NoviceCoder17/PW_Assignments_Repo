import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30*1000,
  expect: {
    timeout:10*1000,
  },
  retries: 2,
  reporter: 'html',
  use: {
    baseURL: 'https://eventhub.rahulshettyacademy.com',
    trace: 'on-first-retry',
    headless: !!process.env.CI,
  },
    projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ]
});
