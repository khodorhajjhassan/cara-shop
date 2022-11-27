import React from 'react'
import { features } from '../../dummydata'
import './home.css'

const Features = () => {
  return (
    <>
    <section className='feature section-m1'>
        <div className="container">
            <div  className="feature-content">
                {features.map((val)=>(
                    <div className="items">
                        <img src={val.cover}
                         alt="" />
                         <p className='items-name'>{val.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Features
