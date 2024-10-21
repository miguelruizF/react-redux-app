//Contains the contents of the application
import createSagaMiddleware from 'redux-saga';
//createStore is deprecated, use configureStore from Redux Toolkit instead
// import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';
import { configureStore } from '@reduxjs/toolkit';

export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    /* let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        )
    ); */

    const store = configureStore(
        {
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
            devTools: process.env.NODE_ENV !== 'production',
        }
    );

    //We init the watcher saga
    sagaMiddleware.run(watcherSaga);

    return store;
}
