import React from 'react';
import { shallow } from 'enzyme';
import { configureStore } from '@source4society/scepter-app-utilities';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import AlertWrapper, { renderMessageFunction } from '../src/index';

test('AlertWrapper will render a component properly when it is wrapped', () => {
  const labels = (label) => label;
  const mockMessage = fromJS({ hasProperties: 'mockMessage' });
  const component = () => <div></div>;
  const mockMapStateToProps = createStructuredSelector({ message: () => mockMessage });
  const wrapperWithLabel = AlertWrapper(labels);
  const WrapResult = wrapperWithLabel(component, mockMapStateToProps);
  const store = configureStore({ route: {} }, true);
  const renderedMessage = shallow(<WrapResult store={store} />, { context: store });
  renderedMessage.render();
  renderMessageFunction(labels)(mockMessage);
});
