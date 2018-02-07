import vi from './vi';
import en from './en';

const locales = {en, vi};

export default class Locale {
    constructor(languages) {
        this.strings = locales[languages];
        this.subscription = [];
    }

    setLanguague(languages) {
        this.strings = locales[languages];
        this.subscription.forEach(cb => cb());
    }

    subscribe(callback) {
        this.subscription.push(callback);
    }
}