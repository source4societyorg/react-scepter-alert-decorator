import PropTypes from 'prop-types';
import { valueOrDefault } from '@source4society/scepter-utility-lib';
import { makeSelectMessage } from '@source4society/react-authapp-container/lib/selectors';
import { createStructuredSelector } from 'reselect';

export const propTypes = {
  message: PropTypes.object,
};

export const mapStateToProps = (state, ownProps, injectMakeSelectMessage) => {
  const makeSelectMessageSelector = valueOrDefault(injectMakeSelectMessage, makeSelectMessage);
  return createStructuredSelector({
    message: makeSelectMessageSelector(),
  });
};
