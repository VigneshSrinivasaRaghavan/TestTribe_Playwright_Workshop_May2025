import { test, expect } from '@playwright/test';

test('Downalod a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('#textbox').click();
  await page.locator('#textbox').pressSequentially('Vignesh', { delay: 100 });
  await page.locator('#createTxt').click();

  const download = await Promise.all([
        page.waitForEvent('download'),
        page.click('#link-to-download')
    ]);
    const filePath = await download[0].path();
    const defaultFileName = download[0].suggestedFilename();
    console.log(`File downloaded to: ${filePath}`);

    await download[0].saveAs(`./downloads/${defaultFileName}`);
    await download[0].saveAs("./downloads/playwright_downloaded_file.txt");
});

// Assignment - To download pdf from the same website