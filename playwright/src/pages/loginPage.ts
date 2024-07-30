import { Page } from "@playwright/test"
import { baseUrl, devPass, mySeed } from "../../consts/consts"
import { BasePage } from "./basePage"

export class LoginPage extends BasePage{
    constructor(page:Page){
        super(page)
        this.url = 'https://dev.xficonsole.com/sign-in'
    }
    public async putSeed(){
        const title = this.page.getByPlaceholder('Enter the seed phrase')
        return await title?.fill(mySeed);
    }
    public async getEnter(){
        const title = this.page.getByRole('button', { name: 'Enter' })
        return await title?.click();
    }
}
