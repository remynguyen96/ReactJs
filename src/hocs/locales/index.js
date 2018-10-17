import en from './en';
import vi from './vi';

const locales = { en, vi };

export default class Locale {
  constructor(language) {
    this.strings = locales[language];
  }

  setLanguage(language) {
    this.strings = locales[language];
  }
}