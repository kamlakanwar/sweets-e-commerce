import React from 'react'
import BannerImg from '../assets/banner.jpg'
import { ProductData } from '../data'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <div>
      <img
      src={BannerImg}
      alt="banner-img"
      className="w-full h-[40vh] sm:h-[50vh] md:h-[80vh] object-cover"
      />

      <Cards productData={ProductData}/>
    </div>
  )
}

export default Home
