
export const ARTICLES_LOAD = 'ARTICLES_LOAD';
export const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS';
export const ARTICLES_FAIL = 'ARTICLES_FAIL';

export const loadArticles = () => ({
  type: ARTICLES_LOAD
})

export const showArticles = (articles) => ({
  type: ARTICLES_SUCCESS,
  articles
})

export const showArticlesError = (err) => ({
  type: ARTICLES_FAIL,
  err
})

