import React from 'react'
import Item from '../Item/Item'

export default function ItemList({products}) {
  return (
    <div className="d-flex flex-wrap justify-content-around text-center">
      {products.map ((product)=>(
        <Item key={product.id} product={product}/>
      ))}
    </div>
  )
}
