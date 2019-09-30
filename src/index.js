import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'connected-react-router';

import App from './containers/App';
import Track from './containers/Track';

import configureStore, { history } from './configureStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route path='/tracks/:id' component={ Track } />
                    <Route path='/' component={App} exact={true}/>
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);