import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="container">
      {[0, 1, 2].map((_, index) => (
        <div className="square" key={index}>
          {[0, 1, 2, 3].map(i => (
            <span key={i} style={{ '--i': i }}></span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Loader;
