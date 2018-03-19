import PropTypes from 'prop-types';
import { propTypes, mapStateToProps } from '../src/props';

test('propTypes is defined properly', () => {
  expect(propTypes).toEqual({
    message: PropTypes.object,
  });
});

test('mapStateToProps retrieves the message state from the appauth-container', () => {
  const mockState = { hasProperties: 'mockState' };
  const mockProps = { hasProperties: 'mockProps' };
  const mockMessage = { hasProperties: 'mockMessage' };
  const mockMakeSelectMessage = () => () => mockMessage;
  expect(mapStateToProps(mockState, mockProps, mockMakeSelectMessage)()).toEqual({
    message: mockMessage,
  });
});
