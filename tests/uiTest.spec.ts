import { Builder, By, Key, until, WebDriver } from "selenium-webdriver"
import { myDevSeed } from "../const/consts";
import { time } from "console";

jest.useRealTimers();

describe("Console tests", () => {
    let driver: WebDriver;
    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get("https://dev.xficonsole.com/");
        await driver.manage().setTimeouts({ implicit: 20000 });
    });
    afterAll(async () => {
        await driver.quit();
    }, 20000);

    test('Open auth', async () => {

        let passcode = await driver.findElement(By.xpath('//*[@id="input"]'));
        let nextButton = await driver.findElement(By.xpath('//*[@id="__next"]//button'));

        driver.wait(until.elementIsVisible(passcode), 10000);
        await passcode.click();
        await passcode.sendKeys('Gw1pqh5yxQ');
        await nextButton.click();
        
        console.log('Успешно ввел код')
    },20000);
    test('Login with seed', async () => {

        let loginWithSeed = await driver.findElement(By.xpath("//button[.//div[text()='Log in with a seed phrase']]"));

        await driver.wait(until.elementIsVisible(loginWithSeed), 10000);
        await loginWithSeed.click();

        console.log('Успешно перешел к вводу сида')
    });
    test('Enter seed', async () => {
        let mnemonic = await driver.findElement(By.xpath('//*[@id="mnemonic"]'));
        let nextButton = await driver.findElement(By.xpath("//button[.//div[text()='Enter']]"));

        await mnemonic.sendKeys(myDevSeed);
        await nextButton.click();
        console.log('Успешно вошел')
    });
    test('Main page', async () => {
        let header = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[2]/div/div/header'));

        let headerName = await header.getAttribute("class");
        expect(headerName).toBe("css-1mfxri2");
        console.log('Элемент совпадает')
    },20000);

})