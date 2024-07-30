import { test, expect } from '@playwright/test';
import { StartPage } from '../src/pages/startPage';
import { PageFactory } from '../src/pages/pageFactory';
import { LoginPage } from '../src/pages/loginPage';


test.describe('Ui tests', () => {
  let startPage: StartPage
  let loginPage: LoginPage

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage()
    startPage = PageFactory.getPage(page, "StartPage") as StartPage
    loginPage = PageFactory.getPage(page, "LoginPage") as LoginPage

    await startPage.viewPage()
  })

  test('check title text', async () => {
    const titleText = await startPage.getTitleText();
    expect(titleText).toContain('Enter password')
  });

  test('check sub title text', async () => {
    const titleText = await startPage.getSubTitleText();
    expect(titleText).toContain('We take great responsibility')
  });
  test('check footer', async () => {
    const ecosystem = await startPage.getFooterEco();
    const crossFi = await startPage.getFooterCrossFi();
    const fundation = await startPage.getFooterFundation();
    const scan = await startPage.getFooterScan();
    const license = await startPage.getFooterLicense();
    const refNo = await startPage.getFooterRefNo();

    expect(ecosystem).toContain('Ecosystem');
    expect(crossFi).toContain('Cross Finance');
    expect(fundation).toContain('CrossFi Foundation');
    expect(scan).toContain('XFI Scan');
    expect(license).toContain('License:');
    expect(refNo).toContain('© CROSSFI');
  });

  test('send pass', async () => {
    await startPage.sendPass();
  });
  test('click pass button', async () => {
    await startPage.clickPass();
  });

  test('check login title text', async () => {
    const titleText = await startPage.getLoginTitleText();
    expect(titleText).toContain('A universal tool for working')
  });
  // test('check login sub Title text', async () => {
  //   const titleText = await startPage.getLoginSubTitleText();
  //   expect(titleText).toContain('Manage. Delegate. Create.')
  // });
  
  test('click seed button', async () => {
    await startPage.seedGo();
  });
  //login Page
  test('send seed', async () => {
    await loginPage.putSeed();
  });
  test('click next button', async () => {
    await loginPage.getEnter();
  });



  // test('go to', async () => {
  //   await startPage.goTo();

  //   // Click the get started link.
  //   //await page.getByRole('link', { name: 'Get started' }).click();

  //   // Expects page to have a heading with the name of Installation.
  //   //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  // });  
})
