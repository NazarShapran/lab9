const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://umsys.com.ua/sign-in', { waitUntil: 'networkidle' });
  const html = await page.content();
  console.log(html);
  await browser.close();
})();
