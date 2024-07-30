import { Page } from "@playwright/test"
import { baseUrl, devPass } from "../../consts/consts"
import { BasePage } from "./basePage"

export class StartPage extends BasePage {
    constructor(page: Page) {
        super(page)
        this.url = baseUrl
    }
    public async getTitleText() {
        const title = this.page.getByRole('heading', { name: 'Enter password' })
        return await title?.textContent();
    }
    public async getSubTitleText() {
        const title = this.page.getByText('We take great responsibility')
        return await title?.textContent();
    }
    //footer
    public async getFooterEco() {
        const title = this.page.getByRole('heading', { name: 'Ecosystem' })
        return await title?.textContent();
    }
    public async getFooterCrossFi() {
        const title = this.page.getByRole('link', { name: 'Cross Finance' })
        return await title?.textContent();
    }
    public async getFooterFundation() {
        const title = this.page.getByRole('link', { name: 'CrossFi Foundation' })
        return await title?.textContent();
    }
    public async getFooterScan() {
        const title = this.page.getByRole('link', { name: 'XFI Scan' })
        return await title?.textContent();
    }
    public async getFooterLicense() {
        const title = this.page.getByText('License:')
        return await title?.textContent();
    }
    public async getFooterRefNo() {
        const title = this.page.getByRole('heading', { name: '© CROSSFI' })
        return await title?.textContent();
    }


    public async sendPass() {
        const title = this.page.getByPlaceholder('Password')
        return await title?.fill(devPass);
    }
    public async clickPass() {
        const title = this.page.getByTestId('button-test-id')
        return await title?.click();
    }
    //loginPage
    public async getLoginTitleText() {
        const title = this.page.getByRole('heading', { name: 'A universal tool for working' })
        return await title?.textContent();
    }
    public async getLoginSubTitleText() {
        const title = this.page.getByText('Manage. Delegate. Create.')
        return await title?.textContent();
    }
    public async seedGo() {
        const title = this.page.getByRole('button', { name: 'Log in with a seed phrase' })
        return await title?.click();
    }
}
