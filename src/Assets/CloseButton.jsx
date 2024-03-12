import * as React from 'react';

function CloseButton(props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 6.223L14.223 0 16 1.778 9.777 8 16 14.223 14.223 16 8 9.777 1.777 16 0 14.223 6.223 8 0 1.777 1.778 0 8 6.223z"
        fill="#607B96"
      />
    </svg>
  );
}

export default CloseButton;
