import * as React from "react";
const SVGComponent = (props) => (
  <div className="max-w-full overflow-hidden">
    <svg
      width={1441}
      height={58}
      viewBox="0 0 1441 58"
      fill="none"
      className="max-w-full mx-auto mt-10 transform scale-300 md:scale-100"
      {...props}
    >
      <g clipPath="url(#line-2_svg__clip0)" opacity={0.8}>
        <path
          opacity={0.6}
          d="M-67.314-11.564C500.658 147.98 1194.41-66.146 1654.91 64.253"
          stroke="url(#line-2_svg__paint0_linear)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray="10 20"
          style={{
            animation: "70s linear 0s infinite normal none running heartbeat2",
          }}
        />
      </g>
      <defs>
        <linearGradient
          id="line-2_svg__paint0_linear"
          x1={1509.79}
          y1={31.779}
          x2={-8.847}
          y2={6.032}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA800" stopOpacity={0} />
          <stop offset={0.078} stopColor="#FFA800" />
          <stop offset={0.498} stopColor="#FFA800" />
          <stop offset={0.932} stopColor="#FFC148" stopOpacity={0.59} />
          <stop offset={1} stopColor="#FFCE6F" stopOpacity={0} />
        </linearGradient>
        <clipPath id="line-2_svg__clip0">
          <path fill="#fff" d="M1655 .53H-67v64h1722z" />
        </clipPath>
      </defs>
      <style>
        {
          "@keyframes heartbeat2{0%{stroke-dashoffset:0%}to{stroke-dashoffset:100%}}"
        }
      </style>
    </svg>
  </div>
);
export default SVGComponent;
