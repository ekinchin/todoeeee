import { combineReducers } from 'redux';
import items from './item';
import paginator from './paginator';

export default combineReducers({ items, paginator });
