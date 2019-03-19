/**
 *
 * Y
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectY from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Y extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Y</title>
          <meta name="description" content="Description of Y" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Y.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  y: makeSelectY(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'y', reducer });
const withSaga = injectSaga({ key: 'y', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Y);
