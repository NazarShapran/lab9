import { test, expect } from '../fixtures/pages.js';

const EMAIL = process.env.UMSYS_EMAIL;

test.describe('Profile page (authenticated)', () => {
  test('loads for authenticated user and shows profile info', async ({ pages, page }) => {
    test.skip(!EMAIL, 'UMSYS_EMAIL not set');
    const profile = pages.profile(EMAIL);
    const response = await profile.goto();
    
    // Перевірка, що сторінка завантажилася без помилок (status 200)
    expect(response?.status()).toBe(200);

    // Перевіряємо URL сторінки
    await expect(page).toHaveURL(new RegExp(`/${EMAIL.replace(/[.@+]/g, '\\$&')}/?$`));
    
    // Перевірка заголовку профілю
    await expect(profile.profileHeading).toBeVisible();
  });

  test('sign-out button is present and functional', async ({ pages, page }) => {
    test.skip(!EMAIL, 'UMSYS_EMAIL not set');
    const profile = pages.profile(EMAIL);
    await profile.goto();

    await expect(profile.signOutButton).toBeVisible();
    await profile.signOut();

    await expect(page).toHaveURL(/\/(sign-in)?\/?$/);
  });
});

test.describe('Profile page (anonymous)', () => {
  test.use({ storageState: { cookies: [], origins: [] } }); // без сесії

  test('anonymous visitor is redirected to /sign-in', async ({ page }) => {
    test.skip(!EMAIL, 'UMSYS_EMAIL not set');
    await page.goto(`/${EMAIL}`);

    await expect(page).toHaveURL(/\/sign-in\/?/);
  });
});
