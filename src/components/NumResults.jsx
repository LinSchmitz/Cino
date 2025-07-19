import React from 'react';

export function NumResults({ movies }) {
  if (!movies) return null;

  return (
    <p className="num-results">
      Found <strong>{movies.length} </strong> results
    </p>
  );
}
