import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { Driver } from "selenium-webdriver/chrome";
import { driver } from "../driver";
import { baseUrl } from "../const/consts";

export class LoginPage extends BasePage{
    //private readonly url:string
    constructor(driver:WebDriver){
        super(driver)
        this.url = baseUrl
    }
    async getTitleText(){
        const getTitleText = await this.driver.findElement(By.xpath('//*[@id="__next"]//header/div[1]/p'))
        return await getTitleText.getText()
    }
}

export const loginPage = new LoginPage(driver)