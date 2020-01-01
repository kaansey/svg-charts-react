import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol;
    padding: 0px;
    margin: 0px;
    width: 100%;
  }
  a:link    {
    text-decoration:  none;
    font-weight:      normal;
    background-color: inherit;
    color: inherit;
    } 
  a:visited {
    text-decoration:  none;
    font-weight:      normal;
    background-color: inherit;
    color: inherit;
    } 
  a:hover   {
    text-decoration:  none;
    font-weight:      normal;
    background-color: inherit;
    color: inherit;
    } 
  a:active  {
    text-decoration:  none;
    font-weight:      normal;
    background-color: inherit;
    color: inherit;
    } 
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
