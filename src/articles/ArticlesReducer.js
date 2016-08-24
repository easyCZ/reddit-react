import { ARTICLES_LOAD, ARTICLES_SUCCESS, ARTICLES_FAIL } from './ArticleActions.js';


const initialState = {
  loading: false,
  error: false,
  articles: []
}

const articlesReducer = (state = initialState, action) => {

  switch (action.type) {

    case ARTICLES_LOAD:
      return Object.assign({}, state, { loading: true })

    case ARTICLES_SUCCESS:
      return Object.assign({}, state, { loading: false, articles: action.articles })

    case ARTICLES_FAIL:
      return Object.assign({}, state, { error: true })

    default:
      return state
  }

}

export default articlesReducer;