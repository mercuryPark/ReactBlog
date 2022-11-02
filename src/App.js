
import './App.css';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {
  let [test, setTest] = useState('하이용')

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
        <>

 <h1>블로그 입니다. {test}</h1>
 <h1>블로그 입니다. 2</h1>
 <h1>블로그 입니다 3</h1>
 <h1>블로그 입니다 4</h1>
 <button onClick={()=>{
  let copy = test;
  copy = copy + '채린앙'
  setTest(copy)
  
 }}
 >변경스테이트 써보자잉</button>
</>
      }></Route>
      <Route path="/light" element={<div>이게 라우튼데요?</div>}></Route>
     </Routes>
    
   

    </div>
  );
}

export default App;
