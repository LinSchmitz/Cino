import React, { useEffect, useRef } from 'react';
import { useKey } from './useKey';

export function Search({ query, setQuery }) {
  // 1 - create Ref, 2- use ref, 3 - useEffect
  const inputEl = useRef(null);

  //custome hook
  useKey('Enter', function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery('');
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
