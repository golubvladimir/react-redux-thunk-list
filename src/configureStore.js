import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import createRootReducer from './reducers';
import routerMiddleware from "react-router-redux/src/middleware";

export const history = createBrowserHistory();

export default (preloadedState) => {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(
            compose(
                applyMiddleware(
                    routerMiddleware(history),
                    thunk
                )
            )
        )
    );

    return store;
}