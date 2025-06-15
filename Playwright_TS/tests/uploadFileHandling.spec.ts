import {test} from '@playwright/test'

test('Upload Single Files', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const upload = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('input[name="files[]"]')
    ]);
    await upload[0].setFiles('./filesToUpload/playwright_1.png');
})

test('Upload multiple Files - Approach 1', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const upload = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('input[name="files[]"]')
    ]);
    await upload[0].setFiles(['./filesToUpload/playwright_1.png','./filesToUpload/playwright_2.png']);
    await page.pause();
})

test('Upload multiple Files - Approach 2', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('input[name="files[]"]','./filesToUpload/playwright_1.png') //Single file upload
    await page.reload();
    await page.setInputFiles('input[name="files[]"]',['./filesToUpload/playwright_1.png','./filesToUpload/playwright_2.png'] ) //Multiple file upload
})