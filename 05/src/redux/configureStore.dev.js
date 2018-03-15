/**
 * 生成appStore
 * */
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
//【router】
import {browserHistory} from 'react-router';
import {routerMiddleware, routerReducer} from 'react-router-redux';
//【thunk】可以分发函数型action
import ThunkMiddleware from 'redux-thunk';
//复合请求中间件
import createFetchMiddleware from 'redux-composable-fetch';
//应用全部的reduces
import appReducers from './appReducers';
//开发工具
import DevTools from './DevTools';

//异步请求action中间件
const FetchMiddleware = createFetchMiddleware(
    {
        afterFetch({action, result})//fetch后回调
        {
            return result.json().then(data =>
            {
                return Promise.resolve( //解决
                    {
                        action,
                        result: data,
                    });
            });
        },
    });

//组合中间件的增强型store创建器
const finalCreateStore = compose
(
    applyMiddleware //应用多个中间件
    (
        ThunkMiddleware, //支持函数型action的中间件
        FetchMiddleware, //复合型请求中间件
        routerMiddleware(browserHistory) //应用路由中间件
    ),
    DevTools.instrument()//开发工具监测
)(createStore);

//组合应用全部reduces
const appAllReduces = combineReducers(
    {
        ...appReducers,
        routing: routerReducer, //组合路由的reducer
    });

export default function appStoreCreator(initialState)
{
    const appStore = finalCreateStore(appAllReduces, initialState);

    return appStore;
}
