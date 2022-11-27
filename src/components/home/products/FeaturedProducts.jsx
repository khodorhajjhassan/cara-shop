import React from 'react'
import './product.css'
import { products } from '../../../dummydata'
import Title from '../../common/heading/title/Title'

const FeaturedProducts = () => {
  return (
    <>
    <section className='products section-p1'>
      <Title title='Featured Products' subtitle='Summer Collection New Modern Design' />

    <div className="container">
        <div className="prod-content">
            {products.map((val)=>(
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

export default FeaturedProducts
