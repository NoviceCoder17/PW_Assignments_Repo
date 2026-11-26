import { expect,test } from "@playwright/test";

test("Smoke1",async({browser})=>{ 
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/login")
    await expect(page).toHaveTitle(/EventHub/i)
    await expect(page.locator(".text-xl")).toHaveText("Sign in to EventHub");
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByPlaceholder('you@email.com')).toBeVisible()
    await expect(page.locator('#login-btn')).toBeVisible()
    await context.close()
})

test("Smoke2",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/login")
    await expect(page.locator("#password")).toBeVisible()
    await expect(page.url()).toContain('/login')
    await expect(page.locator(".text-xl")).toHaveText("Sign in to EventHub");
    await context.close()
} )   

