import React from 'react'

const NewsItem=(props)=>{

   let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div className='my-5 '>
       <div className="card">
  <img src={imageUrl?imageUrl:"https://www.opindia.com/wp-content/uploads/2023/05/new-parliament-.jpg"} className="card-img-top" alt="..."/>  
  <div className="card-body">
    <h5 className="card-title">{title}... <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on { new Date(date).toISOString()}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem
