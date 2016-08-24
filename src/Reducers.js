import { combineReducers } from 'redux';
import articles from './articles/ArticlesReducer.js';

const reducers = combineReducers({
  articles
})

export default reducers;