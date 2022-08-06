import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {

    country: 'in',
    pageSize: 8,
    category:'general'

  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category:PropTypes.string
  }
  
capitalize = (string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}

  constructor(props) {
    super(props);
    console.log("yo from constructor..")
    this.state={
      articles :[],
      loading:false,
      page:1

    };
    document.title = `${this.capitalize(this.props.category) } - NEWSBLOT `
  }


  async componentDidMount(){

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c44845906e084973a4953b97da97cce8&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);

    let parsedData = await data.json()

    console.log(data);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading: false})
  }

  handleNextClick = async () =>{
   console.log("Next Button CLicked")

   if(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)){

   }
   
   else{
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c44845906e084973a4953b97da97cce8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
   
   this.setState({loading:true})
    let data = await fetch(url);

    let parsedData = await data.json()

 
    this.setState({ 
    page:this.state.page+1,
    articles: parsedData.articles,
    loading :false

   })

  }



  }

  handlePreviousClick  = async () =>{
    console.log("Previous Button CLicked")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c44845906e084973a4953b97da97cce8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);

    let parsedData = await data.json()

    console.log(data);
    this.setState({ 
    page:this.state.page-1,
    articles: parsedData.articles,
    loading:false

   })


  }



  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center fst-italic" style={{margin: '40px'}}  >NEWSBLOT - Top Headlines From {this.capitalize(this.props.category) } </h1>
        {/* <h3 className="mt-3 text-center" >Top Headlines</h3> */}

       {this.state.loading &&  <Spinner/>}
        

        <div className="row ">
        {! this.state.loading &&  this.state.articles.map((element)=>{
         return  <div className="col-md-4  mt-4 " key={element.url} >
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,90):""} 
            
            imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
          </div>

         })}
        </div>
        <div className="container mt-3  d-flex justify-content-between" >

        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} > &larr; Previous</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr; </button>


        </div>




      </div>
    );
  }
}

export default News;
