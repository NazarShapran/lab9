import { BasePage } from './base-page.js';

export class SignInPage extends BasePage {
  get path() { return '/sign-in'; }

  get emailInput()    { return this.page.getByLabel(/e-?mail/i); }
  get passwordInput() { return this.page.getByLabel(/password|пароль/i); }
  get submitButton()  { return this.page.getByRole('button', { name: /sign in|увійти|log in/i }); }
  get errorMessage()  { return this.page.getByRole('alert'); }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
