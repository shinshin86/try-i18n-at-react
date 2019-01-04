import { addLocaleData } from 'react-intl';
import jaLocaleData from 'react-intl/locale-data/ja';
import enLocaleData from 'react-intl/locale-data/en';
import koLocaleData from 'react-intl/locale-data/ko';

import en from './en';
import ja from './ja';
import ko from './ko';

addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);
addLocaleData(koLocaleData);

export const translationMessages = {
  en,
  ja,
  ko
};

export const chooseLocale = locale => {
  console.log('Your locale :', locale);
  switch (locale) {
    case 'en-GB':
      return translationMessages.en;
    case 'ja':
      return translationMessages.ja;
    case 'ko':
      return translationMessages.ko;
    default:
      return translationMessages.en;
  }
};
