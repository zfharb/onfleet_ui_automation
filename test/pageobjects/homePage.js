import Page from './page.js';

const SELECTORS = {
    SEARCH_BOX: "/html/body/div[1]/div[3]/form/div[2]/div[1]/div[1]/div/div[2]/input"
};

class HomePage extends Page {
    constructor() {
        super(SELECTORS);
    }

    get searchBox() {
        $(SELECTORS.SEARCH_BOX).waitForDisplayed(20000);
        return $(SELECTORS.SEARCH_BOX);
    }
   
}

export default new HomePage();