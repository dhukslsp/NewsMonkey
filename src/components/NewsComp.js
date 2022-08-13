import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export default class NewsComp extends Component {
  //prev

  //This part is the articles part
  myartcicles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.myartcicles,
      page: 1,
      loading: false
    }
    document.title = this.props.catogory;
  }

  async componentDidMount() {
    this.setState({ loading: true })
    let myfetch = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.catogory}&page=${this.state.page}&pagesize=5&apiKey=${this.props.apike}`;
    let another = await fetch(myfetch);
    let parsedata = await another.json();
    this.setState({ articles: parsedata.articles, loading: false })
  }
  fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({page: this.state.page + 1});
    let myfetch = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.catogory}&page=${this.state.page}&pagesize=5&apiKey=${this.props.apike}`;
    let another = await fetch(myfetch);
    let parsedata = await another.json();
    this.setState({ articles: this.state.articles.concat(parsedata.articles)})
  };
  render() {
    return (
      <div>
        <p className='text-4xl font-bold p-8 flex justify-center my-10 mb-0'>Newsmonkey - Top headlines form {this.props.catogory}</p>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='flex flex-wrap justify-center'>
            {this.state.articles.map((elm) => {
              return <NewsItem key={elm.url} url={elm.urlToImage} heading={elm.title} desc={elm.description} btnsel={elm.url} author={elm.author} publish={elm.publishedAt} source={elm.source.name} />
            })}
          </div>
        </InfiniteScroll>
        </div>
    )
  }
}
