import React from 'react'
import { newArrival } from '../../../dummydata'
import Title from '../../common/heading/title/Title'
import './product.css'
const NewArrival = () => {
  return (
    <>
      <section className='newArrival section-p1'>
      <Title title='New Arrivals' subtitle='Summer Collection New Modern Design' />

    <div className="container">
        <div className="prod-content">
            {newArrival.map((val)=>(
                <div className="proditems">
                    <img src={val.cover} alt="" />
                    <p>{val.brand}</p>
                    <h3>{val.title}</h3>
                    <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="price">
                        <span className='pp'>{val.price}</span>
                        <span><i class="fas fa-cart-shopping"></i></span>
                    </div>
                </div>
            ))}
        </div>
    </div>



      </section>
    </>
  )
}

export default NewArrival
