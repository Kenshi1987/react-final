import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({product}) {
  return (
    
      <div className="d-flex align-items-center justify-content-center text-center">
    <Card className='border border-3'style={{ width: '80%', height:'auto', margin:'100px' }}>
      <Card.Title className='text-center fs-1 m-3'>{product.name}</Card.Title>
      <Card.Img style={{height:'auto', width:'100%', padding:'10px'}} src={product.img} />
      <Card.Body>
        
        <Card.Text className='justify fs-3'>
          {product.description}
        </Card.Text> 
        <Card.Text className='justify fs-6'>
          Stock={product.stock}          
        </Card.Text> 
        <Card.Text className='justify fs-2 fw-bold'>
       $ {product.price}          
        </Card.Text>            
      </Card.Body>
      <ItemCount product={product}/>
    </Card>
    </div>
    
  )
}
