import React from 'react'
import Banner from '../common/banner/Banner'
import FeaturedProducts from './products/FeaturedProducts'
import Features from './Features'
import Hero from './Hero'
import NewArrival from './products/NewArrival'
import Offers from '../common/banner/Offers'

const Home = () => {
  return (
    <>
    <Hero />
    <Features />
    <FeaturedProducts />
    <Banner />
    <NewArrival />
    <Offers />
    </>
  )
}

export default Home