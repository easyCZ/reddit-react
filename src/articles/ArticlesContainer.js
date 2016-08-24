import { connect } from 'react-redux';

import ArticleList from './ArticleList.js';
import { loadArticles } from './ArticleActions.js';


const mapStateToProperties = (state) => ({
  articles: state.articles.articles,
  error: state.articles.error,
  loading: state.articles.loading
})

const mapDispatchToProperties = (dispatch) => ({
  onArticlesLoad: () => dispatch(loadArticles())
})

const ArticlesContainer = connect(
  mapStateToProperties,
  mapDispatchToProperties
)(ArticleList)

export default ArticlesContainer;