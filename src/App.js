import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 18px;
`;
const ChangeBtn = styled.button`
  background: #008cba;
  border: none;
  border-radius: 4px;
  padding: 16px 32px;
  color: #fff;
  display: inline-block;
  font-size: 16px;
`;

class App extends Component {
  changeLocale(locale, message) {
    if (window.confirm(message)) {
      switch (locale) {
        case 'en-GB':
          console.log('to ja');
          break;
        case 'ja':
          console.log('to en');
          break;
        default:
          console.log('to en');
          break;
      }
    }
  }

  render() {
    const name = 'John';
    console.log(this.props.intl);
    const { locale, messages } = this.props.intl;

    return (
      <div>
        <Title>
          <FormattedMessage id="Top.Title" />
        </Title>
        <p>
          <FormattedMessage id="Top.Message" values={{ name }} />
        </p>
        <div>
          <ChangeBtn
            onClick={() =>
              this.changeLocale(locale, messages['ChangeLocale.Msg'])
            }
          >
            <FormattedMessage id="ChangeLocale.Btn" />
          </ChangeBtn>
        </div>
      </div>
    );
  }
}

export default injectIntl(App);
