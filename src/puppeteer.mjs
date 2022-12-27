import puppeteer from "puppeteer";

const URL = "https://web.whatsapp.com";

export async function openWebWhatsapp() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });

  return {
    page,
    browser,
  };
}
