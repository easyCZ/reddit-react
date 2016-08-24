import React, { Component, PropTypes } from 'react';


class ArticleList extends Component {

  render() {

    return (
      <div>
        {this.props.articles.toString()}
        <button onClick={this.props.onArticlesLoad}>press me</button>
      </div>

    )
  }

}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,

  onArticlesLoad: PropTypes.func.isRequired
}

export default ArticleList;