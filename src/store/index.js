import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';
import {composeEnhancers} from '../middleware/dev';   
import reducer from '../reducer'

const enhancer = applyMiddleware(thunk, logger);
const store = createStore(reducer, composeEnhancers(enhancer))

export default store;

