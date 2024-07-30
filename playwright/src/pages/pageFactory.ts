import { Page } from "@playwright/test";
import { StartPage } from "./startPage";
import { LoginPage } from "./loginPage";

export class PageFactory{
    static getPage(page:Page, pageName:string){
        switch(pageName){
            case("StartPage"):
            return new StartPage(page)
            case("LoginPage"):
            return new LoginPage(page)
        }
    }
}