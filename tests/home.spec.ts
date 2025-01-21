import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the correct header', async ({ page }) => {
    const header = page.locator('[data-testid="header"]');
    await expect(header).toHaveText('Biblioteka Frontowców');
  });

  test('should navigate to the register page on button click', async ({
    page,
  }) => {
    await page.click('button[data-testid="register-button"]');
    await expect(page).toHaveURL('/register');
  });
  test('should display at least one item', async ({ page }) => {
    const items = page.locator('[data-testid^="map-item-"]');
    await expect(items.first()).toBeVisible();
  });
});

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should login and navigate to the home page', async ({ page }) => {
    await page.fill('[data-testid="email-input"]', 'test@test.pl');
    await page.fill('[data-testid="password-input"]', 'test');
    await page.click('button[data-testid="login-button"]');
    await expect(page).toHaveURL('/');
  });

  test('should show error message for invalid login', async ({ page }) => {
    await page.fill('[data-testid="email-input"]', 'wrong@test.pl');
    await page.fill('[data-testid="password-input"]', 'wrong');
    await page.click('button[data-testid="login-button"]');
    const errorMessage = page.locator('[data-testid="error-message"]');
    await expect(errorMessage).toHaveText('Nieprawidłowy login lub hasło');
  });
});
