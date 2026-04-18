import { test, expect } from '../fixtures/pages.js';

test.describe('Home page core functionality', () => {
  test.beforeEach(async ({ pages }) => {
    await pages.home().goto();
  });

  test('loads successfully and shows a non-empty title', async ({ pages, page }) => {
    expect(await pages.home().title()).not.toBe('');
  });

  test('header contains sign-in link with correct text', async ({ pages }) => {
    const home = pages.home();
    await expect(home.signInLink.first()).toBeVisible();
    await expect(home.signInLink.first()).toHaveText(/Увійти/i);
  });

  test('sign-in link navigates to /sign-in', async ({ pages, page }) => {
    const home = pages.home();
    await home.openSignIn();
    await expect(page).toHaveURL(/\/sign-in\/?$/);
  });

  test('displays main hero heading', async ({ pages }) => {
    const home = pages.home();
    await expect(home.heroHeading).toBeVisible();
    await expect(home.heroHeading).toHaveText('UMSystem — це сучасна система керування навчальним закладом');
  });

  test('displays order heading', async ({ pages }) => {
    const home = pages.home();
    await expect(home.orderHeading).toBeVisible();
  });

  test('features link is present in navigation', async ({ pages }) => {
    const home = pages.home();
    await expect(home.featuresLink).toBeVisible();
  });

  test('displays prices section correctly', async ({ pages }) => {
    const home = pages.home();
    await expect(home.pricesHeading).toBeVisible();
  });

  test('contains multiple order buttons', async ({ pages }) => {
    const home = pages.home();
    expect(await home.orderFormLinks.count()).toBeGreaterThan(0);
  });

  test('contains choose package buttons', async ({ pages }) => {
    const home = pages.home();
    expect(await home.chooseLinks.count()).toBeGreaterThanOrEqual(4);
  });
});
