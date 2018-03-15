// const initialState = {
//     loading: true,
//     error: false,
//     articleList: [],
// };
//
// const LOAD_ARTICLES = 'LOAD_ARTICLES';
// const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
// const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';
//
// /**
//  * 导出组合意图
//  * */
// export function loadArticlesActions()
// {
//     return {
//         types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR], //包含3个子意图的组合意图
//         url: '/api/articles.json',
//     };
// }
//
// /**
// * 导出reducer
// * */
// export default function previewList(state = initialState, action)
// {
//     switch (action.type)
//     {
//         case LOAD_ARTICLES: //开始加载，使用原始状态
//         {
//             return {
//                 ...state,
//                 loading: true,
//                 error: false,
//             };
//         }
//
//         case LOAD_ARTICLES_SUCCESS: //加载成功
//         {
//             return {
//                 ...state,
//                 loading: false,
//                 error: false,
//                 articleList: action.payload, //提取action中的负载，更新到状态树中
//             };
//         }
//
//         case LOAD_ARTICLES_ERROR://加载失败
//         {
//             return {
//                 ...state,
//                 loading: false,
//                 error: true,
//             };
//         }
//
//         default:
//             return state;
//     }
// }
