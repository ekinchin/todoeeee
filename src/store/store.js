import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//import rootReducer from '../reducers';

export default () => {
	//const store = createStore((rootReducer), applyMiddleware(logger));
		const store = createStore(()=>{}, applyMiddleware(logger));
	return store;
}