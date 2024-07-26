import { loginPage } from "../pages/loginPage"

describe.only("Home Page test", () => {
    afterAll(async()=>{
        await loginPage.closePage()
    },20000)
    test("Check title text", async () => {
        await loginPage.viewPage();
        const titleText = await loginPage.getTitleText();
        console.log(titleText);
        expect(titleText).toContain('TypeScript is JavaScript with syntax for types.')
    })
})