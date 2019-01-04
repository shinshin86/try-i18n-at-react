import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import { chooseLocale } from './i18n';

const locale = navigator.language;

ReactDOM.render(
  <IntlProvider locale={locale} messages={chooseLocale(locale)}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
