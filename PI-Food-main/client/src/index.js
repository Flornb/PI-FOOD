import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';   //  provider is used to wrap index for redux to work
import { store } from './redux/store';
// This code imports the necessary dependencies for creating a Redux store and a React-Redux provider. It then creates a store using the createStore function from Redux, passing in the root reducer for the store. Finally, it renders the App component within a Provider component, passing the store as a prop. This makes the store available to all components in the app

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
);

reportWebVitals();

// ReactDOM.render(
//   // provider is used to wrap index for redux to work
//   <Provider store={store}> 
//    <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//   </React.StrictMode> 