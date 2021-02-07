import Page from './page.js';

const SELECTORS = {
    HAWAII_TRAVELINFO_LINK: "//span[contains(., 'Go Hawaii: Hawaii Travel Information')]"
};

class ResultPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    get hawaiiTravelInfoLink() {
        $(SELECTORS.HAWAII_TRAVELINFO_LINK).waitForDisplayed(20000);
        return $(SELECTORS.HAWAII_TRAVELINFO_LINK);
    }
   
}

export default new ResultPage();