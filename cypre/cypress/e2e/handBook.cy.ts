
import { pages } from "../support/consts/common";
import { PageFactory } from "../support/pages/pageFactory"

describe("Open Hand Book page", ()=>{
    const homePage = PageFactory.getPage(pages.HOME_PAGE)

    it("Open hand book", ()=>{
        homePage?.visitPage();
        homePage?.navigationBar.clickOnNavigationBar("Handbook");
        homePage?.waitForTitleText("Handbook")
    })
})