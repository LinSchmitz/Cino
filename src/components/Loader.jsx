import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-circle">
      <span className="dot" />
      <svg viewBox="0 0 160 160">
        <circle r="64" cy="80" cx="80" />
      </svg>
    </div>
  );
}
