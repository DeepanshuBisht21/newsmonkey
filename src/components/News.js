import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';




export class News extends Component {

  static defaultProps = {
    Country: 'in',
    pageSize: 8,
    Category: 'general',
  }
  static propTypes = {
    Country: PropTypes.string,
    pageSize: PropTypes.number,
    Category: PropTypes.string,
  }
CapitalizeLetter=(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);

}

  constructor(props) {
    super(props);
    console.log("Hellow i am a constructor of News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title=`${this.CapitalizeLetter(this.props.category)} - NewsMonkey`;
  }
  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c11a891258c4f4cb23ce66563f93b60&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedata = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();

  }
  handlePrevious = async () => {
    this.setState({page:this.state.page - 1})
    this.updateNews();

  }
  hanndleNext = async () => {
    this.setState({page:this.state.page + 1})
    this.updateNews();

  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ margin: '35px 0' }}>NewsMonkey - Top  {this.CapitalizeLetter(this.props.category)} Headlines</h1>
        <div className="row">
          {this.state.articles.map((elemant) => {
            return <div className="col-md-4" key={elemant.url}>
              <NewsItem title={elemant.title ? elemant.title.slice(0, 44) : ""} description={elemant.description ? elemant.description.slice(0, 88) : ""} imageUrl={elemant.urlToImage} newsUrl={elemant.url} 
              author={elemant.author} date={elemant.publishedAt} source={elemant.source.name}/>
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Pervious</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.hanndleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
