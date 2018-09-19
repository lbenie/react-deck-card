import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => (
  <div className="alert alert-danger p-5 m-5 fade show" role="alert">
    <p className="ml-5 mt-3">{props.message}</p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export { Error };
