'use client';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Normalize } from './Normalize';

const GlobalStyle = createGlobalStyle`
    ${Normalize}
    
    *, *::after, *::before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font: inherit;
      vertical-align: baseline;
    }

    html {
      text-rendering: optimizeLegibility;
      scroll-behavior: smooth;
      height: 100%;
    }

    body {
      word-wrap: break-word;
      min-height: 100vh;
    }

    ::-moz-selection,
    ::selection {
      background: #000;
      color: #fff;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }

    .stop-scrolling {
      overflow-y: hidden;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `;

export const GlobalStyles = () => {
  return <GlobalStyle />;
};
