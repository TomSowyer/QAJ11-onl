import { driver } from "../driver";
import { mainPage } from "../pages/mainPage";
import { buttonName, searchAddress, titleFromFirstPage } from "../const/consts";

describe("Console tests", () => {
    afterAll(async () => {
        await driver.quit();
    });

    test("Check title text", async () => {
        await mainPage.viewPage();
        const getTitleText = await mainPage.getTitleText();
        expect(getTitleText).toContain(titleFromFirstPage)
    })

    test("Theme change", async () => {
        await mainPage.viewPage();
        const themeChange = await mainPage.themeChange();
    }, 20000)

    test("Check button text", async () => {
        await mainPage.viewPage();
        const getButtonText = await mainPage.getButtonText();
        expect(getButtonText).toContain(buttonName)
    })

    test("Search address", async () => {
        await mainPage.viewPage();
        const putAddress = await mainPage.putAddress();
    })

    test("Max. validators", async () => {
        await mainPage.viewPage();
        const getMaxAddress = await mainPage.getMaxAddress();
        console.log(getMaxAddress);
        expect(getMaxAddress).toContain("128")
    })
})