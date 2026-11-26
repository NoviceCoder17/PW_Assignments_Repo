const { test, expect } = require('@playwright/test');


test("Smoke test on login",async({browser})=>{ 
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/login")
    await expect(page).toHaveTitle(/EventHub/i)
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByPlaceholder('you@email.com')).toBeVisible()
    await expect(page.locator('#login-btn')).toBeVisible()
    await context.close()
})

test("Test with a different context and page", async({page,browser})=>{
    await page.goto("/login")
    await page.getByPlaceholder('you@email.com').fill('beginner@sample.com')
    await expect(page.getByPlaceholder('you@email.com')).toHaveValue('beginner@sample.com')
    const context = await browser.newContext()
    const page2 = await context.newPage()
    await page2.goto("https://eventhub.rahulshettyacademy.com/login")
    await expect(page2.getByRole('heading', { name: 'Sign in to EventHub' })).toBeVisible()
    await expect(page2.getByPlaceholder('you@email.com')).toHaveValue('')
    await context.close()
})