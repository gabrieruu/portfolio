import * as React from 'react';

function Loading(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: '0 auto',
          background: '0 0',
        }}
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
        {...props}
      >
        <path fill="#33536d" d="M19 19H39V39H19z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            calcMode="discrete"
          />
        </path>
        <path fill="#33536d" d="M40 19H60V39H40z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            calcMode="discrete"
          />
        </path>
        <path fill="#33536d" d="M61 19H81V39H61z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            calcMode="discrete"
          />
        </path>
        <path fill="#33536d" d="M19 40H39V60H19z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            calcMode="discrete"
          />
        </path>
        <path fill="#33536d" d="M61 40H81V60H61z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            calcMode="discrete"
          />
        </path>
        <path fill="#33536d" d="M19 61H39V81H19z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            calcMode="discrete"
          />
        </path>
        <path fill="#33536d" d="M40 61H60V81H40z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            calcMode="discrete"
          />
        </path>
        <path fill="#33536d" d="M61 61H81V81H61z">
          <animate
            attributeName="fill"
            values="#011627;#33536d;#33536d"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            calcMode="discrete"
          />
        </path>
      </svg>
    </div>
  );
}

export default Loading;
