import React from 'react'
import Cards from '../components/Cards'
import { ProductData } from '../data'

const Products = () => {
  return (
    <div>
      <Cards productData={ProductData}/>
    </div>
  )
}

export default Products
