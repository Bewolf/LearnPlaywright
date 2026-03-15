import { LoginPage } from "./LoginPage"

class HomePage extends LoginPage {
    clickOnCrm() {
        console.log("Click on CRMSFA")
    }


}

let homePage = new HomePage()
homePage.loadUrl()
homePage.enterUserName()
homePage.enterPassword()
homePage.clickSignin()
homePage.clickOnCrm()
