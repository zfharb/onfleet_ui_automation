import Page from './page';

const SELECTORS = {
    SIGN_UP_BUTTON: '',

    ORDER_NOW: "//button[text() = 'Order Now']"
};

class LandingScreen extends Page {
    constructor() {
        super(SELECTORS);
    }

    get signUpButton() {
        $(SELECTORS.SIGN_UP_BUTTON).waitForDisplayed(20000);
        return $(SELECTORS.SIGN_UP_BUTTON);
    }

    get orderNowButton() {
        $(SELECTORS.ORDER_NOW).waitForDisplayed(30000);
        return $(SELECTORS.ORDER_NOW);
    }
}

export default new LandingScreen();