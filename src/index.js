import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { IntlProvider } from 'react-intl';
import { chooseLocale } from './i18n';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: navigator.language
    };
    this.localeUpdate = this.localeUpdate.bind(this);
  }

  localeUpdate = locale => {
    this.setState({ locale });
  };

  render() {
    const { locale } = this.state;
    return (
      <IntlProvider locale={locale} messages={chooseLocale(locale)}>
        <Main {...this.state} localeUpdate={this.localeUpdate} />
      </IntlProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
