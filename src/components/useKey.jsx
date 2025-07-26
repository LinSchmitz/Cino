import React, { useEffect } from 'react';

export function useKey(key, action) {
  // use Esc key
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener('keydown', callback);

      // clean up
      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [action, key]
  );
}
