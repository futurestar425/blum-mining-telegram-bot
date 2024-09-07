import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
    
//     {/* <Helmet
//       defaultTitle='Vite React Tailwind Starter'
//       titleTemplate='%s | Vite React Tailwind Starter'
//     >
//       <meta charSet='utf-8' />
//       <html lang='id' amp />
//     </Helmet> */}
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
