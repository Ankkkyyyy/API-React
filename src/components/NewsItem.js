
import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

    let {title,description,imageUrl,newsUrl} = this.props;

    return (
      <div>
        <div className="card center " style={{width: "18rem"}} >
  <img src={imageUrl? imageUrl:"https://houserepossession.co.uk/wp-content/uploads/021810_1657_UKMortgageL1.jpg"

} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}.</p>
    <a href={newsUrl} className="btn btn-sm btn-primary" style={{backgroundColor: '#6C62CA'}} >Read More..</a>
  </div>
</div>
  </div>


    )
  }
}

export default NewsItem
