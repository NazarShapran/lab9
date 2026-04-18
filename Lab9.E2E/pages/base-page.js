export class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  /** Дочірні класи перевизначають */
  get path() { return '/'; }

  async goto() {
    return this.page.goto(this.path, { waitUntil: 'domcontentloaded' });
  }

  async title() { return this.page.title(); }
}
