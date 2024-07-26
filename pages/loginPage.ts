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
    async getTitleText():Promise<string>{
        const titleElement = await this.driver.findElement(By.xpath("//div[@class='container']//h1"))
        return await titleElement.getText()
    }
}

export const loginPage = new LoginPage(driver)