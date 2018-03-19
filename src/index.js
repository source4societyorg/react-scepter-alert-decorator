import React, { Component } from 'react';
import { valueOrDefault, ifTrueElseDefault, isNotEmpty } from '@source4society/scepter-utility-lib';
import Alert from '@source4society/react-alert-component';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { propTypes, mapStateToProps as mapStateToPropsDefault } from './props';


export const renderMessageFunction = (labels) => (message) => ifTrueElseDefault(isNotEmpty(message.get('message')), <Alert alertType={message.get('alertType')}>{labels(message.get('message'))}</Alert>);

export default (labels) => (WrappedComponent, injectedMapStateToProps, injectedRenderMessageFunction) => {
  const renderMessage = valueOrDefault(injectedRenderMessageFunction, renderMessageFunction);
  const mapStateToProps = valueOrDefault(injectedMapStateToProps, mapStateToPropsDefault);
  class AlertWrapper extends Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return <WrappedComponent {...this.props} renderMessage={renderMessage(labels)} />;
    }
  }

  AlertWrapper.propTypes = propTypes;
  const withConnect = connect(mapStateToProps);
  return compose(withConnect)(AlertWrapper);
};
