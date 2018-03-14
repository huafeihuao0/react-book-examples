/**
 * 路由
 * */
import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
//导航控制器
import FrameNavVC from '../navvcs/FrameNavVC';
import HomeVC from '../vcs/HomeVC';
import DetailVC from '../vcs/DetailVC';

//路由
const routes = browserHistory =>
    (
        <Router history={browserHistory}>   {/*【路由管理器】*/}
            <Route path="/" component={FrameNavVC}> {/*【导航路由】*/}
                <IndexRoute component={HomeVC}/>    {/*【首页路由】*/}
                <Route path="/detail/:id" component={DetailVC}/> {/*【detail路由】*/}
            </Route>
        </Router>
    );

export default routes;
