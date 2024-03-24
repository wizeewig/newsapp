import React from 'react'

const NewsItem =(props)=>{

    let {title , description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent:'end', position:'absolute', right:'0'}}>
        <span className="rounded-pill badge bg-danger">{source}</span>
          </div>
            <img className="card-img-top" style={{height:"210px", width:"312px"}} src={!imageUrl?"data:image/png;base64,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":imageUrl} alt="Sorry🥺 Image not available"/>
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
