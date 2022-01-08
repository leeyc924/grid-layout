import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import GridLayout from './GridLayout';

const theme = {
  white: '#fff',
  black: '#000',
  defualtBlack: '#7c7c7c',
  defaultBlue: '#6A8BFF',
  defaultHover: '#E8EDFF',
  defulatGray: '#939393',
  disabled: '#f7f7f7',
  basicBackground: 'ffffff',
  grayBackground: '#dfdfdf',
  gray50: '#F8F8F8',
  gray75: '#f2f2f2',
  gray300: '#ccc',
  gray400: '#DEDEDE',
  gray250: '#ececec',
  gray550: '#848484',
  gray600: '#777',
  gray700: '#555555',
  red: '#f05b5b',
};

const GlobalStyle = createGlobalStyle`
  @charset "utf-8";
  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif !important;
    box-sizing: border-box;
    #root {
      width: 100%;
      height: 100%;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button, input, textarea {
    font: inherit;
  }
  * {
    box-sizing: inherit;
  }
  *:not(input, textarea) {
    /* 드래그 방지 css */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
  /* 포커스 시 placeholder 숨기기 in <input>, <textarea> */
  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder { /* WebKit browsers */
    color: transparent;
  } 
  input:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:transparent;
  }
  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:transparent;
  }
  input:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:transparent;
  }
`;

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <GridLayout />
    </ThemeProvider>
  );
};

export default App;