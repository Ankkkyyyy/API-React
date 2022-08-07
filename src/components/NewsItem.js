
import React from 'react'

const  NewsItem =(props)=>{

    let {title,description,imageUrl,newsUrl,author,date} = props;

    return (
      <div>
        <div className="card center" >
  <img src={imageUrl? imageUrl:"https://houserepossession.co.uk/wp-content/uploads/021810_1657_UKMortgageL1.jpg"

} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}.</p>
    <a href={newsUrl} className="btn btn-sm btn-primary" style={{backgroundColor: '#6C62CA'}} >Read More</a>
    <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on { new Date (date).toGMTString()} </small></p>
  </div>
</div>
  </div>


    )
  
}

export default NewsItem
