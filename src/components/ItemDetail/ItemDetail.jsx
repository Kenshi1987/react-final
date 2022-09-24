import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemDetail({product}) {
  return (
    
      <div className="d-flex align-items-center justify-content-center text-center">
    <Card style={{ width: '80%', height:'auto', margin:'100px' }}>
      <Card.Title className='text-center fs-1 m-3'>{product.name}</Card.Title>
      <Card.Img style={{height:'auto', width:'100%', padding:'10px'}} src={product.img} />
      <Card.Body>
        
        <Card.Text className='justify fs-3'>
          {product.description}
        </Card.Text>       
      </Card.Body>
    </Card>
    </div>
    
  )
}
