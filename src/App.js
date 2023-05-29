import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar , SearchFeed , Feed , ChannelDetails , VideoDetail } from './components/index';
import './App.css'
const App = () => {
  return (
      <BrowserRouter>
      <Box sx= {{background: "#000"}}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Feed></Feed>}></Route>
        <Route path='/video/:id'  element={<VideoDetail></VideoDetail>}></Route>
        <Route path='/channel/:id' exact element={<ChannelDetails></ChannelDetails>}></Route>
        <Route path='/search/:searchTerm'  element={<SearchFeed></SearchFeed>}></Route>
        
     </Routes>
      
      </Box>
      </BrowserRouter>
   
  )
}

export default App

