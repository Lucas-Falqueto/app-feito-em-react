import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component, isClosed, ...rest }) {
  const isLoggeIn = false;

  if (isClosed && !isLoggeIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  //eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
