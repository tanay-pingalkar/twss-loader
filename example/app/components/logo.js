import { logo } from "../style.twss";
import React from "react";

function Logo() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={logo}
    >
      <path
        d="M84 47C66.9335 47 56.2665 55.5335 52 72.6C58.4 64.0665 65.8665 60.8665 74.4 63C79.2685 64.217 82.7485 67.7495 86.6005 71.659C92.8755 78.0285 100.137 85.4 116 85.4C133.066 85.4 143.734 76.8665 148 59.8C141.6 68.3335 134.133 71.5335 125.6 69.4C120.731 68.183 117.251 64.6505 113.399 60.741C107.124 54.3715 99.8625 47 84 47ZM52 85.4C34.9335 85.4 24.2665 93.9335 20 111C26.4 102.467 33.8665 99.2665 42.4 101.4C47.2685 102.617 50.7485 106.149 54.6005 110.059C60.8755 116.428 68.1375 123.8 84 123.8C101.066 123.8 111.734 115.267 116 98.2C109.6 106.734 102.133 109.933 93.6 107.8C88.7315 106.583 85.2515 103.05 81.3995 99.141C75.1245 92.7715 67.8625 85.4 52 85.4Z"
        fill="url(#paint0_linear)"
      />
      <circle
        cx="85"
        cy="85"
        r="80"
        stroke="url(#paint1_linear)"
        stroke-width="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="16.4442"
          y1="71.576"
          x2="126.993"
          y2="135.317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2298BD" />
          <stop offset="1" stop-color="#0ED7B5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="22.525"
          y1="25.5"
          x2="132.6"
          y2="154.275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1CACBA" />
          <stop offset="1" stop-color="#12CCB6" stop-opacity="0.21" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
