import HomePage from '../pageobjects/homePage.js'
import ResultPage from '../pageobjects/resultPage.js'
import HawaiiTravelInfoPage from '../pageobjects/hawaiiTravelInfoPage.js'

import { expect } from 'chai';

describe('google page', () => {
    it('should search for hawaii travel info page', () => {
        browser.url('https://www.google.com/')

        HomePage.searchBox.keys("hawaii\n")
        console.log(ResultPage.hawaiiTravelInfoLink)
        ResultPage.hawaiiTravelInfoLink.click()
        HawaiiTravelInfoPage.mainLogo
        console.log(browser.getTitle())
        expect(browser.getTitle()).to.equal('Hawaii Travel Information | Official Hawaiian Islands Vacation Guide | Go Hawaii')

        browser.pause(10000)

    })
})