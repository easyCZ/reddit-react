import { connect } from 'react-redux';

import ArticleList from './ArticleList.js';
import { loadArticles, showArticles } from './ArticleActions.js';


const getRedditArticles = () => {

}


const mapStateToProperties = (state) => ({
  articles: state.articles.articles,
  error: state.articles.error,
  loading: state.articles.loading
})

const mapDispatchToProperties = (dispatch) => ({
  onArticlesLoad: () => {

    dispatch(loadArticles())

    fetch('https://www.reddit.com/.json')
      .then(r => r.json())
      .then(r => r.data.children)
      .then(children => children.map(child => child.data))
      .then(articles => dispatch(showArticles(articles)))
      .catch(console.error);

  }
})

const ArticlesContainer = connect(
  mapStateToProperties,
  mapDispatchToProperties
)(ArticleList)

export default ArticlesContainer;