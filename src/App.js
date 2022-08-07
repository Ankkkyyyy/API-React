
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Routes,
  Route,
} from "react-router-dom";

// My REACT_APP_NEWS_API="c44845906e084973a4953b97da97cce8"

const App=()=>{
  let  pageSize=6;
   let apikey = process.env.REACT_APP_NEWS_API
  // apikey="c44845906e084973a4953b97da97cce8"
    return (
      <div>
      
      <Navbar/>
    
      {/* <News pageSize={pageSize}   country='in' category="science"  /> */}
      <Routes>
      <Route exact path="/" element={ <News apikey={apikey} key="home" pageSize={pageSize}   country='in' category="general"  />} />
      <Route exact path="/business" element={ <News apikey={apikey} key="business" pageSize={pageSize}   country='in' category="business" />} />
      <Route exact path="/science" element={ <News apikey={apikey} key="science" pageSize={pageSize}   country='in' category="science"  />} />
      <Route exact path="/health" element={ <News apikey={apikey} key="health" pageSize={pageSize}   country='in' category="health"  />} />
      <Route exact path="/entertainment" element={ <News apikey={apikey} key="entertainment" pageSize={pageSize}   country='in' category="entertainment"  />} />
      <Route exact path="/sports" element={ <News apikey={apikey} key="sports" pageSize={pageSize}   country='in' category="sports"  />} />
      <Route exact path="/technology" element={ <News apikey={apikey} key="technology" pageSize={pageSize}   country='in' category="technology"  />} />
     

      </Routes>
      </div>
    )
  }


export default App;
