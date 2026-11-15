// playwright is just the core library that drives browsers, no test framework.
// @playwright/test is the runner on top of it: test(), expect(), fixtures, retries, reports.

import { expect,test } from "@playwright/test";

test("Smoke1",async({page})=>{ 
    await page.goto("/login");
    await expect(page.locator(".text-xl")).toHaveText("Sign in to EventHub");
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByPlaceholder('you@email.com')).toBeVisible()
    await expect(page.locator('#login-btn')).toBeVisible()
})

test("Smoke2",async({page})=>{
    await page.goto("/login")
    await expect(page.locator("#password")).toBeVisible()
    await expect(page.url()).toContain('/login')
    await expect(page.locator(".text-xl")).toHaveText("Sign in to EventHub");
} )   

