# Assignments

## Assignment 1

### playwright vs @playwright/test

- `playwright` is the core library that drives browsers. No test framework.
- `@playwright/test` is the runner on top of it: `test()`, `expect()`, fixtures, retries, reports.


## Assignment 2

### Page fixture vs browser context

- Browser context: a separate session, like a new browser profile. It has its own cookies, storage and tabs.

- Fresh context: each browser can create new contexts and each one starts clean without carrying over anything from the previous one.

- Page fixture: a ready-to-use page that Playwright gives for each test. A page lives inside a browser context.

- Browser > Browser context > Page
