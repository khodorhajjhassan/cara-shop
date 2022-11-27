import React from 'react'
import './banner.css'

const Offers = () => {
  return (
    <>
      <section className='offers  section-p1'>
        <div className="container">
            <div className="offers-content section-m1 ">
                <div className="left same">
                    <p>crazy deals</p>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress on sale at cara</span>
                    <button className='offer-btn'>Learn more</button>
                </div>
                 <div className="right same">
                    <p>spring/summer</p>
                    <h2>upcomming season</h2>
                    <span>The best classic dress on sale at cara</span>
                    <button className='offer-btn'>Collection</button>
                </div>
            </div>
            <div className="collection">
                <div className="coll-left">
                <h2>SEASONAL SALE</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
            <div className="coll-mid">
                <h2>NEW FOOTWEAR COLLECTION</h2>
                <h3>Spring / Summer 2022</h3>
            </div>
            <div className="coll-right">
                <h2>T-SHIRTS</h2>
                <h3>New Trendy Prints</h3>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Offers
