import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    console.log("yo from constructor..")
    this.state={
      articles :[],
      loading:false
    };
  }

  async componentDidMount(){

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c44845906e084973a4953b97da97cce8"

    let data = await fetch(url);

    let parsedData = await data.json()

    console.log(data);
    this.setState({articles: parsedData.articles})

    

  }

  render() {
    return (
      <div className="container my-3">
        <h1 >OneClickNews Top Headlines</h1>
        

        <div className="row ">
        {this.state.articles.map((element)=>{
         return  <div className="col-md-4  mt-4 " key={element.url} >
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,90):""} 
            
            imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>

         })}

        </div>
      </div>
    );
  }
}

export default News;
