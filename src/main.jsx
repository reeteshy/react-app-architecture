import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store} >
      <BrowserRouter >
        <AppContainer />
      </BrowserRouter>
    </Provider>
);
