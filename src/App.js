import React, { Component } from 'react'
 import './App.css'
 import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer';

 
class App extends Component {
  state={

  }

  render() {
    return (
      <>
        <Router>
        <Header />
          <Routes>
            <Route exact path='/home' element={<Home />} />
          </Routes>
          <Footer />
      </Router>
      </>
    )
  }
}
export default App;