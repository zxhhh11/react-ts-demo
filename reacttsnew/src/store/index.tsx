
import { enthusiasm } from '../reducers/index';
import { StoreState } from '../types/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


const loggerMiddleware = createLogger();

// export const store = createStore<StoreState>(
//     enthusiasm,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );
// export const store = createStore<StoreState, any, any, any>(enthusiasm, {
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript',
// });
export const store = createStore<StoreState, any, any, any>(enthusiasm, {
    enthusiasmLevel: 2,
    languageName: 'TypeScript',
}, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));