import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Item({product}) {
  return (
    <div className='m-2'>
    <Card style={{ width: '18rem', height:'30rem' }}>
      <Card.Img style={{height:'16rem', width:'100%'}}variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className='justify'>
          {product.description}
        </Card.Text>
        <Link to={`/item/${product.id}`}>
        <Button className='position-absolute bottom-0 start-50 translate-middle-x mb-2 p-2' style={{width:'95%'}} variant="btn btn-success btn-sm">Mas Información</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  );
}




