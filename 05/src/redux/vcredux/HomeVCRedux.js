/**
 * 【Home主页的redux】
 * */
import {combineReducers} from 'redux';
// // 引入 reducer 及 actionCreator
// import listReducers, { loadArticlesActions } from '../components/Home/PreviewListViewRedux';

const initialState = {
    loading: true,
    error: false,
    articleList: [],
};

/**
*意图类型
* */
const ACTION_LOAD_ARTICLES = 'LOAD_ARTICLES';
const ACTION_LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const ACTION_LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

/**
 * 导出组合意图
 * */
function loadArticlesActions()
{
    return {
        types: [ACTION_LOAD_ARTICLES, ACTION_LOAD_ARTICLES_SUCCESS, ACTION_LOAD_ARTICLES_ERROR], //包含3个子意图的组合意图
        url: '/api/articles.json',
    };
}

/**
 * 导出reducer
 * */
function listReducers(state = initialState, action)
{
    switch (action.type)
    {
        case ACTION_LOAD_ARTICLES: //开始加载，使用原始状态
        {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }

        case ACTION_LOAD_ARTICLES_SUCCESS: //加载成功
        {
            return {
                ...state,
                loading: false,
                error: false,
                articleList: action.payload, //提取action中的负载，更新到状态树中
            };
        }

        case ACTION_LOAD_ARTICLES_ERROR://加载失败
        {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        default:
            return state;
    }
}

/**
 * 到处意图
 * */
export const actions =
    {
        loadArticles: loadArticlesActions,
    };

/**
 * 导出reduces
 * */
export default combineReducers(
    {
        list: listReducers,
    });


