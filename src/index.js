import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App/App';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
