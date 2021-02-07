import Page from './page.js';

const SELECTORS = {
    PAGE_MAIN_LOGO: "//*[@alt = 'The Hawaiian Islands logo']"
};

class HawaiiTravelInfoPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    get mainLogo() {
        $(SELECTORS.PAGE_MAIN_LOGO).waitForDisplayed(20000);
        return $(SELECTORS.PAGE_MAIN_LOGO);
    }
   
}

export default new HawaiiTravelInfoPage();