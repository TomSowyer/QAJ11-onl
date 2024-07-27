import { mainPage } from "../pages/loginPage"

describe.only("Home Page test", () => {
    afterAll(async()=>{
        await mainPage.closePage()
    },20000)
    test("Check title text", async () => {
        await mainPage.viewPage();
        const titleText = await mainPagePage.getTitleText();
        console.log(titleText);
        expect(titleText).toContain('TypeScript is JavaScript with syntax for types.')
    })
})