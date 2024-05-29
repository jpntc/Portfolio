import React from 'react';

const DottedPattern = () => (
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dotted-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
        <circle cx="5" cy="5" r="2" fill="black" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
  </svg>
);

export default DottedPattern;
