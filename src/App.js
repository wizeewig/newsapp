import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () =>{

  const apiKey = "a73e703a384146a0b5b812d393f3a7c2"
  //const apiKey= process.env.REACT_APP_NEWS_API

  // state={
  //   progress: 0
  // }
  const [progress, setProgress]=useState(0)
  // setProgress = (progress) =>{
  //   setState({progress: progress})
  // }


    return (
      <Router>
       <div>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       <Routes>
          <Route exact path="/" element = {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"in"} category={"general"}/>}/>
          <Route exact path="/business" element = {<News  setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} country={"in"} category={"business"}/>}/> 
          <Route exact path="/entertainment" element = {<News  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/science" element = {<News  setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} country={"in"} category={"science"}/>}/> 
          <Route exact path="/health" element = {<News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} country={"in"} category={"health"}/>}/> 
          <Route exact path="/sports" element = {<News  setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} country={"in"} category={"sports"}/>}/> 
          <Route exact path="/technology" element = {<News  setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} country={"in"} category={"technology"}/>}/> 
        </Routes>
       </div>
       </Router>
    )
  }


export default App

