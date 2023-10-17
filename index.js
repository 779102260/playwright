const {chromium} = require('playwright');
const assert = require('node:assert');


(async () => {
  // Setup
  const browser = await chromium.launch({headless: true});
  const context = await browser.newContext();
  const page = await context.newPage();

  // The actual interesting bit
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://baidu.com/');

  assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion

  setInterval(() => {
    console.log('done2223');
  }, 1000)

  // Teardown
  await context.close();
  await browser.close();
})();