import { pages } from "../consts/common";
import { HomePage } from "./homePage";

export class PageFactory{
    static getPage(pageName:pages){
        switch(pageName){
            case(pages.HOME_PAGE):
            return new HomePage
        }
    }
}