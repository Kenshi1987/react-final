import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({product}) {
  return (
    
      <div className="d-flex align-items-center justify-content-center text-center">
    <Card className='border border-3'style={{ width: 'auto', height:'100%', margin:'10px', alignContent:'center', alignItems:'center', textAlign:'center' }}>
      <Card.Title className='text-center fs-1 m-3'>{product.name}</Card.Title>
      <Card.Img style={{height:'auto', width:'80%', padding:'10px'}} src={product.img} />
      <Card.Body>
        
        <Card.Text className='justify' style={{fontSize:"1rem"}}>
          {product.description}
        </Card.Text> 
        <Card.Text className='justify'>
          Stock={product.stock}          
        </Card.Text> 
        <Card.Text className='justify fw-bold' style={{fontSize:"3rem"}}>
       $ {product.price}          
        </Card.Text>            
      </Card.Body>
      <ItemCount product={product}/>
    </Card>
    </div>
    
  )
}
