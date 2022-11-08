
import './App.css';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import MainPage from './routes/MainPage'
import axios from 'axios'
import {css} from '@emotion/react'
import Nav from './nav'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import About from './routes/About';
import {Data, LinkData} from './contents/Data'
import FirstFrontChapter  from './posts/FirstFrontChapter'

function App() {
  let [test, setTest] = useState('하이용')
  let [content, setContent] = useState(Data)
  let [link, setLink] = useState(LinkData)

  return (
    <div className="App">
      
      {/* main nav */}
    <Nav></Nav>

      <Routes>
      <Route path="/" element={
        <div style={{display:'flex', flexWrap:'wrap', width:'880px', justifyContent:'center', gap:'30px', marginTop:'100px'}}>
        { 
        content.map((a,i)=>{
          return <MainPage link={link} content={content} i={i} key={i}/>
      })
      }
        </div>
      }></Route>
      <Route path="/about" element={
         <About />
      }></Route> 


      <Route path='/posts'>
      <Route path={link[0]} element={<FirstFrontChapter />}/>
      </Route>


     </Routes>

    </div>
  );
}

export default App;
