import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{

  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)
  const [totalResults, setTotalResults]=useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(65);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}- CC-News`;
    updateNews();
  }, [])
  

//   handlePrevClick = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json()

//     // this.setState({
//     //         page : this.state.page-1,
//     //         articles : parsedData.articles,
//     //         loading : false
//     //     })
//     this.setState({
//       page: this.state.page - 1,
//     });
//     this.updateNews();
//   };

//   handleNextClick = async () => {
//     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))){

//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page+1}&pageSize=${props.pageSize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // this.setState({loading:false})

//     // this.setState({
//     //         page : this.state.page+1,
//     //         articles : parsedData.articles
//     //     })
//     // }
//     this.setState({
//       page: this.state.page + 1,
//     });
//     this.updateNews();
//   };

const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;    
    setPage(page + 1 )
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setLoading(false)
};


    return (
      <>
        
          <h1 className="text-center" style={{ margin: "30px 0px", marginTop: "90px"}}>
            CC-News Top {capitalizeFirstLetter(props.category)}{" "}
            Headlines
          </h1>
          {loading && <Spinner />}
          
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row">
              {!loading &&
                articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        newsUrl={element.url}
                        imageUrl={element.urlToImage}
                        author={!element.author ? "Anonymous" : element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
            </div>
          </InfiniteScroll>
          
        

        {/* <div className="container d-flex justify-content-between my-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
  author: "ikchhit",
  date: "12/09/2022",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};

export default News;

