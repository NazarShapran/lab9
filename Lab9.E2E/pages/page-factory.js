import { HomePage }    from './home-page.js';

export class PageFactory {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  home() { return new HomePage(this.page); }
}
