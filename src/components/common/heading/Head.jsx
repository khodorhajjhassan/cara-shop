import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './head.css'


const Head = () => {
    const [click,setClick]=useState(false)

  return (
    <>
     <section className='header'>
        <div className="container">
            <div className="header-content ">
                <img src="../img/logo.png" alt="" />
                
                <div className="navbar">
                    <ul className={click?"mobile-nav":"flexNav"} onClick={()=>setClick(false)}>
                        <li><Link className='active' to="/home">Home</Link></li>
                        <li><Link to="/shope">Shope</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><i class="fas fa-shopping-bag"></i></li>
                    </ul>
                </div>
                    <div className="start">
                   <li><i class="fas fa-shopping-bag"></i></li>
                   <button className='toggel' onClick={()=>setClick(!click)}>{click?<i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}</button>
                   </div>

            </div>
            
        </div>
     </section>
    </>
  )
}

export default Head
