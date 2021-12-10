import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'hidden', border: '5px solid black', height: '100%'}}>
      {props.children}
    </div>
  );
};

export default Scroll;