import { BasePage } from './base-page.js';

export class HomePage extends BasePage {
  get path() { return '/'; }

  get signInLink() {
    return this.page.getByRole('link', { name: /увійти/i });
  }

  get heroHeading() {
    return this.page.getByRole('heading', { name: 'UMSystem — це сучасна система керування навчальним закладом' }).first();
  }
  
  get orderHeading() {
    return this.page.getByRole('heading', { name: 'Використання системи значно покращить конкурентоспроможність навчального закладу' }).first();
  }

  get featuresLink() {
    return this.page.getByRole('link', { name: 'Можливості' }).first();
  }

  get orderFormLinks() {
    return this.page.getByRole('link', { name: 'Замовити' });
  }

  get pricesHeading() {
    return this.page.getByRole('heading', { name: 'Прайс', exact: true }).first();
  }

  get chooseLinks() {
    return this.page.getByRole('link', { name: 'Обрати' });
  }

  async openSignIn() {
    await this.signInLink.first().click({ force: true });
  }
}
