import React from 'react';
import Preview from './PreviewView';

/**
 * 预览列表组件
 * */
class PreviewListView
    extends React.Component
{
    static propTypes =
        {
            push: React.PropTypes.func, //路由推送
            loadArticles: React.PropTypes.func,//加载文章意图分发器
            
            loading: React.PropTypes.bool,
            error: React.PropTypes.bool,
            articleList: React.PropTypes.arrayOf(React.PropTypes.object),
        };

    componentDidMount()
    {
        this.props.loadArticles();//分发加载文章的意图
    }

    render()
    {
        const {loading, error, articleList} = this.props;

        if (error)
        {
            return <p className="message">Oops, something is wrong.</p>;
        }

        if (loading)
        {
            return <p className="message">Loading...</p>;
        }

        return (
            <div>
                {articleList.map(item =>
                {
                    return <Preview {...item} key={item.id} push={this.props.push}/>
                })}
            </div>
        );
    }
}

export default PreviewListView;
