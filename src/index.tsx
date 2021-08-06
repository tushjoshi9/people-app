import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import CSSReset from '@chakra-ui/css-reset';
import customTheme from "./themes/theme";
import { StorageProvider } from "./common/storage";

ReactDOM.render(
  <React.StrictMode>
    <StorageProvider>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </StorageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
