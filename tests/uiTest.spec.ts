import { Builder, By, WebDriver } from "selenium-webdriver"

describe("Quinta tests", () => {
    let driver: WebDriver;
    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.manage().window().maximize();
        await driver.get("https://devdashboard.quinta.pro")
        await driver.manage().setTimeouts({implicit:2000})
    });

    // afterAll(async()=>{
    //     await driver.quit();
    // })
    it('Open auth', async() => {
        
        let passcode = await driver.findElement(By.xpath('//*[@id="input"]'));
        passcode.click();
        passcode.sendKeys('Gw1pqh5yxQ');
        await driver.findElement(By.xpath('//*[@id="__next"]/div/div[3]/div/div[2]/button')).click()
    });
    it('Go auth', async() => {
        
        let email = await driver.findElement(By.xpath('//*[@id="email"]'));
        let password = await driver.findElement(By.xpath('//*[@id="password"]'));

        email.click()
        email.sendKeys('admin@proto.com')
        password.click()
        password.sendKeys('23riouhjfnoweuh4go9iuh4engouil')
        await driver.findElement(By.xpath('//*[@id="signInBlock"]/div[2]/button')).click()
    });
    
})