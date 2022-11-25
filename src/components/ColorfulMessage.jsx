import React from 'react';

const ColorfulMessage = props => {
  const { color, children } = props;
  const contentColor = {
    color: color,
    fontSize: '18px',
  };
  return <p style={contentColor}>{children}</p>;
};

export default ColorfulMessage;
