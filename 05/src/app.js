/**
 * 【应用入口】
 * */
//【react】
import React from 'react';
import ReactDOM from 'react-dom';

//【store】
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

//【router】
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';

//【devtools】
import DevTools from './redux/DevTools';

(function init()
{
    //生成appstore全应用共享
    const appStore = configureStore();
    //同步浏览器历史到应用store中，生成新的路由历史
    const routeHistory = syncHistoryWithStore(browserHistory, appStore);

    //挂在reactdom的真是dom容器
    const appContainer = document.getElementById('root');
    //react根组件
    const reactRoot =
        <Provider store={appStore}> {/*提供store*/}
            <div>
                {routes(routeHistory)}
                <DevTools/>
            </div>
        </Provider>;

    //渲染根组件
    ReactDOM.render(reactRoot, appContainer);
})()
