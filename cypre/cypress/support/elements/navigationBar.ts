export class NavigationBar {
    constructor(){}
    public getNavigationItemByText(text:string){
        return cy.xpath('//*[@id="top-menu"]/div[1]/nav').contains(text)
    }

    public clickOnNavigationBar(text:string){
        this.getNavigationItemByText(text).click()
    }
}