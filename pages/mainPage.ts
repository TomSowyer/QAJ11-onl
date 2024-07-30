import { By, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "../playwright/src/pages/basePage";
import { driver } from "../driver";
import { baseUrl, devPass, searchAddress } from "../const/consts";

export class MainPage extends BasePage{
    constructor(driver:WebDriver){
        super(driver)
        this.url = baseUrl
    };

    async getTitleText():Promise<string>{
        await driver.manage().setTimeouts({ implicit: 20000 });
        const getTitleText = await this.driver.findElement(By.xpath('//header//p[contains(text(),"Main page")]'))
        return await getTitleText.getText()
    };

    async themeChange():Promise<void>{
        await driver.manage().setTimeouts({ implicit: 20000 });
        const themeChange = await this.driver.findElement(By.xpath('//*[@id="__next"]//label/span/input'))
        await themeChange.click()
    };

    async getButtonText():Promise<string>{
        await driver.manage().setTimeouts({ implicit: 20000 });
        const getButtonText = await this.driver.findElement(By.xpath('//header//button[1]'))
        return await getButtonText.getText()
    };

    async putAddress():Promise<void>{
        await driver.manage().setTimeouts({ implicit: 20000 });
        const putAddress = await this.driver.findElement(By.xpath('//*[@id="searchInput"]'))
        await putAddress.sendKeys(searchAddress)
    };

    async getMaxAddress():Promise<string>{
        await driver.manage().setTimeouts({ implicit: 20000 });
        const getMaxAddress = await this.driver.findElement(By.xpath('//*[@id="__next"]/div/div/div/div/div/main/div/div[2]/div[2]/div/div[1]/div/h6[2]'))
        return await getMaxAddress.getText()
    };
}

export const mainPage = new MainPage(driver)