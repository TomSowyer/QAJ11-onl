import { driver } from "../driver";
import { mainPage } from "../pages/loginPage";

describe("Console tests", () => {
    afterAll(async () => {
        await driver.quit();
    }, 20000);

    test("Check title text", async () => {
        await mainPage.viewPage();
        const getTitleText = await mainPage.getTitleText();
        console.log('devPass введен');
        expect(getTitleText).toContain('Basic information')
    },20000)
})