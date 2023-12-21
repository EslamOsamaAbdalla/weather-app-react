import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root{
  --red-color: #F67280;
  --light-red-color: #C06C84;
  --blue-color: #355C7D;
  --light-blue-color: #6C5B7B;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Verdana, sans-serif;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);