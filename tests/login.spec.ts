import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

const USERNAME = process.env.E2E_USERNAME ?? 'standard_user';
const PASSWORD = process.env.E2E_PASSWORD ?? 'secret_sauce';

test.describe('Login Feature', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Should log in successfully', async ({ page }) => {
    await loginPage.login(USERNAME, PASSWORD);
    await expect(page).toHaveURL(/.*inventory.html/);
    const title = page.locator('[data-test="title"]');
    await expect(title).toHaveText('Products');
  });
});