import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import About from './Components/About'


const App = () =>{

  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress]=useState(0)


    return (
      <Router>
       <div>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
      />
       <Routes>
          <Route exact path="/" element = {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"in"} category={"general"} country_name={"India"}/>}/>
          <Route exact path="/business" element = {<News  setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} country={"in"} category={"business"} country_name={"India"}/>}/> 
          <Route exact path="/entertainment" element = {<News  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country={"in"} category={"entertainment"} country_name={"India"}/>}/>
          <Route exact path="/science" element = {<News  setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} country={"in"} category={"science"} country_name={"India"}/>}/> 
          <Route exact path="/health" element = {<News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} country={"in"} category={"health"} country_name={"India"}/>}/> 
          <Route exact path="/sports" element = {<News  setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} country={"in"} category={"sports"} country_name={"India"}/>}/> 
          <Route exact path="/technology" element = {<News  setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} country={"in"} category={"technology"} country_name={"India"}/>}/> 
          <Route exact path="/IndiaTopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"in"} category={"general"} country_name={"India"}/>}> </Route> 
          <Route exact path="/USTopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"us"} category={"general"} country_name={"Unites States of America"}/>}> </Route> 
          <Route exact path="/JapanTopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"jp"} category={"general"} country_name={"Japan"}/>}> </Route> 
          <Route exact path="/KoreaTopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"kr"} category={"general"} country_name={"Korea"}/>}> </Route> 
          <Route exact path="/AustraliaTopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"au"} category={"general"} country_name={"Australia"}/>}> </Route> 
          <Route exact path="/UAETopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"ae"} category={"general"} country_name={"United Arab Emirates"}/>}> </Route> 
          <Route exact path="/ChinaTopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"cn"} category={"general"} country_name={"China"}/>}> </Route> 
          {/* <Route exact path="/YemenTopHeadlines" element =  {<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country={"ye"} category={"general"} country_name={"Yemen"}/>}> </Route>  */}
          <Route exact path="/about" element = {<About/>}> </Route>
        </Routes>
       </div>
       </Router>
    )
  }


export default App

