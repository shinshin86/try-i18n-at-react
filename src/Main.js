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

class Main extends Component {
  changeLocale(locale, message, localeUpdate) {
    if (window.confirm(message)) {
      // fluctuation correction
      if (/en/.test(locale)) locale = 'en';

      switch (locale) {
        case 'en':
          localeUpdate('ja');
          break;
        case 'ja':
          localeUpdate('ko');
          break;
        case 'ko':
          localeUpdate('en');
          break;
        default:
          localeUpdate('en');
          break;
      }
    }
  }

  render() {
    const name = 'John';
    console.log('debug ===> :', this.props);
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
              this.changeLocale(
                locale,
                messages['ChangeLocale.Msg'],
                this.props.localeUpdate
              )
            }
          >
            <FormattedMessage id="ChangeLocale.Btn" />
          </ChangeBtn>
        </div>
      </div>
    );
  }
}

export default injectIntl(Main);
