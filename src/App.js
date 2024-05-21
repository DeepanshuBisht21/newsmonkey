import './App.css';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";

export default class App extends Component {
pageSize=9;

state = {
  progress:0
}
setProgress=(progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <div>
         <Navbar />
         <LoadingBar
         height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="general"/>}/>
        <Route path='/Home' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route path='/general' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route path='/Science' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route path='Sports' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route path='/health' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route path='/technology' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="technology"/>}/>
          <Route path='/business' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route path='/entertainment' element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

