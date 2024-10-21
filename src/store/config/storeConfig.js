import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import { createStoreHook } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStoreHook(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        )
    );

    //We init the watcher saga
    sagaMiddleware.run(watcherSaga);

    return store;
}
