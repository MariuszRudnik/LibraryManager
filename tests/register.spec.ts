import { test, expect } from '@playwright/test';

test('should show error message when passwords do not match', async ({
  page,
}) => {
  await page.goto('/register');

  // Fill in the form
  await page.fill('[data-testid="first-name-input"]', 'Jan');
  await page.fill('[data-testid="last-name-input"]', 'Kowalski');
  await page.fill('[data-testid="email-input"]', 'test@example.com');
  await page.fill('[data-testid="password-input"]', 'password123');
  await page.fill('[data-testid="repeat-password-input"]', 'differentpassword');

  // Click the register button
  console.log('Kliknięto przycisk w Playwright');
  await page.click('[data-testid="register-button2"]');

  // Wait for the error message to be visible
  const errorMessage = page.locator('#repeat-password-error');
  await errorMessage.waitFor({ state: 'visible', timeout: 10000 });

  // Verify its content
  await expect(errorMessage).toHaveText('Hasło nie jest identyczne');
});

test('should show error message when email already exists in the database', async ({
  page,
}) => {
  await page.goto('/register');

  // Fill in the form
  await page.fill('[data-testid="first-name-input"]', 'Jan');
  await page.fill('[data-testid="last-name-input"]', 'Kowalski');
  await page.fill('[data-testid="email-input"]', 'test@test.pl');
  await page.fill('[data-testid="password-input"]', 'password123');
  await page.fill('[data-testid="repeat-password-input"]', 'password123');

  // Click the register button
  await page.click('[data-testid="register-button2"]');

  // Check the error message
  const errorMessage = page.locator(
    'text=Już istnieje użytkownik z takim adresem e-mail.'
  );
  await expect(errorMessage).toBeVisible();
});
