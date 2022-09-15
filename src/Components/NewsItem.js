import React from 'react'

const NewsItem =(props)=>{

    let {title , description, imageUrl, newsUrl, author, date, source} = props;

    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent:'end', position:'absolute', right:'0'}}>
            <span className="rounded-pill badge bg-danger"> {source} </span>
          </div>
            <img className="card-img-top" src={!imageUrl?"https://cdn.wccftech.com/wp-content/uploads/2021/03/SPACEX-STARLINK-LAUNCH-MARCH-scaled.jpeg":imageUrl} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem
