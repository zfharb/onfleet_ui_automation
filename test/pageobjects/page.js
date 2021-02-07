/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    constructor() {
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
}

