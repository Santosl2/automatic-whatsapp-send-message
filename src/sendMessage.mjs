import { sleep } from "./utils/sleep.mjs";
import { openWebWhatsapp } from "./puppeteer.mjs";

export async function sendMessage() {
  const { page, browser } = await openWebWhatsapp();

  const selector = `span[title='${process.env.CONTACT_NAME}']`;

  await page.waitForSelector(selector);
  await page.click(selector);

  const inp = await page.$(
    "footer div[data-testid='conversation-compose-box-input']"
  );

  for (let i = 0; i < process.env.FLOOD_TIMES; i++) {
    await inp.type(process.env.MESSAGE_TO_SEND);
    await page.keyboard.press("Enter");

    // Prevent whatsapp block
    await sleep(process.env.FLOOD_DELAY);
  }

  await sleep(5000);
  await page.close();
  await browser.close();
}
