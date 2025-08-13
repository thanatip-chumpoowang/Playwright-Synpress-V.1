import { test, expect } from '@playwright/test';

test('Login ผ่าน MetaMask ที่ Synpress ตั้งไว้', async ({ page }) => {
  await page.goto('https://develop.d3qpbd5wnz7o7.amplifyapp.com/');
  await page.click('//*[@id="app-wrapper"]/div[1]/div[3]/button');
  await page.click('//*[@id="root"]/div/div[2]/div/div[2]/div/div[2]/div/button');
  await page.click('//button[contains(text(), "MetaMask")]');
});
