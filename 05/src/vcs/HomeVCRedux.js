/**
 * 【Home主页的redux】
 * */
import { combineReducers } from 'redux';
// 引入 reducer 及 actionCreator
import listReducers, { loadArticlesActions } from '../components/Home/PreviewListViewRedux';

/**
* 到处意图
* */
export const actions = {
    loadArticles: loadArticlesActions,
};

/**
* 导出reduces
* */
export default combineReducers({
  list: listReducers,
});


