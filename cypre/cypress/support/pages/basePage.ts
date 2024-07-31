export class BasePage{
    protected url!:string
    constructor(){}

    public visitPage(){
        cy.visit(this.url)
    }

    public getTitle(){
        return cy.title()
    }

    public getTitleText(){
        return this.getTitleText().shoul
    }
}