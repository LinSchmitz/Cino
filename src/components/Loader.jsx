import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <>
      <div className="loader-circle">
        <svg viewBox="0 0 80 80">
          <circle r="32" cy="40" cx="40" id="test" />
        </svg>
      </div>
    </>
  );
}
