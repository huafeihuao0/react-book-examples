/**
 * 主页视图控制器
 * */
import React from 'react';

//react组件与redux状态机连接器
import {connect} from 'react-redux';

import {push} from 'react-router-redux';

//该视图控制器的所有可能意图
import {actions} from '../redux/vcredux/HomeVCRedux';

//预览列表组件
import PreviewListView from '../components/Home/PreviewListView';

/**
 * store的状态与组件属性的映射器
 * */
const mapStateToProps = state =>
{
    return {
        articleList: state.home.list.articleList,
    };
}

/**
 * 将所有action绑定到组件的属性上
 * */
const mapDispatchToProps =
    {
        push,   //路由的推送意图创建器
        ...actions,
    }

//使用【@connect】注解将HomeVC转换成绑定了状态和意图的新视图控制器
@connect(mapStateToProps, mapDispatchToProps)
class HomeVC
    extends React.Component
{
    render()
    {
        const {loadArticles, articleList, push} = this.props;

        return (
            <div>
                <h1>Home</h1>
                <PreviewListView {...this.props} />
            </div>
        );
    }
}

export default HomeVC;
