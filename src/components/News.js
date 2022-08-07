import React, {  useState,useEffect } from "react";
import NewsItem from "./NewsItem";

import Spinner from "./spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {

  const [articles,setArticles] =useState([])
  const [loading,setloading] =useState(true)
  const [page,setpage] =useState(1)
  const [totalResults,settotalResult] =useState(0)
 // document.title = `${this.capitalize(props.category) } - NEWSBLOT `

const capitalize = (string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}

const updateNews = async ()=>{

  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`

    setloading(true)
    let data = await fetch(url);

    let parsedData = await data.json()
    setArticles(parsedData.articles)
    settotalResult(parsedData.totalResults)
    setloading(false)

}


// }

  // ${props.apikey}

   useEffect(() => {
    document.title = `${capitalize(props.category) } - NEWSBLOT `
    updateNews();

},[]);

  //  async componentDidMount(){

  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`
  //   this.setState({loading:true})
  //   let data = await fetch(url);

  //   let parsedData = await data.json()

  //   console.log(data);
  //   // this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading: false})
  //   setArticles(parsedData.articles),
  //   settotalResult(parsedData.totalResult),
  //   setloading(false),

  // }

 const handleNextClick = async () =>{
   console.log("Next Button CLicked")

   setpage(page+1)
   updateNews();


  }


 const handlePreviousClick  = async () =>{
   setpage(page-1)
   updateNews();
  }


 const  fetchMoreData = async () => {

 const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
 setpage(page+1) 
 setloading(true)
  let data = await fetch(url);

    let parsedData = await data.json()
     
    setArticles(articles.concat(parsedData.articles))
    settotalResult(parsedData.totalResults)
    setloading(false)

 
  };

    return (
      // <div className="container my-3">
      <>
        <h1 className="text-center fst-italic" style={{margin: '40px',marginTop:'90px'}}  >NEWSBLOT - Top Headlines From {capitalize(props.category) } </h1>
        {/* <h3 className="mt-3 text-center" >Top Headlines</h3> */}
        {loading && <Spinner />}

       {/* {this.state.loading &&  <Spinner/>} */}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

  <div className="container">
        <div className="row">
       
        {/* {! this.state.loading &&  this.state.articles.map((element)=>   */}
        { articles.map((element)=>{
         return  <div className="col-md-4  mt-4 " key={element.url} >
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,90):""} 
            
            imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
          </div>

         })}
        </div>

        </div>


      </InfiniteScroll>
        {/* <div className="container mt-3  d-flex justify-content-between" >

        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} > &larr; Previous</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr; </button>


        </div> */}



</>
      // </div>
    );
      }

    
    
    


News.defaultProps = {

  country: 'in',
  pageSize: 8,
  category:'general'

}

News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category:PropTypes.string,
}

export default News
