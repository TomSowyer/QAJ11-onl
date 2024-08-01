import { NavigationBar } from "../elements/navigationBar"

export class BasePage{
    protected url!:string

    public navigationBar:NavigationBar
    constructor(){
        this.navigationBar = new NavigationBar
    }

    public visitPage(){
        cy.visit(this.url)
    }

    public getTitle(){
        return cy.title()
    }

    public waitForTitleText(text:string){
        return this.getTitle().should("include",text)
    }
}