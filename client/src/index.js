import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import{ createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';


import reducers from './reducers';


const store = createStore(reducers , compose(applyMiddleware(thunk)));



ReactDOM.render(<App />, document.getElementById('root'));

// tutorial i  was at 44:31 minute
