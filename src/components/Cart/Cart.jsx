import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextComponent'
import { Card } from 'react-bootstrap';

export default function Cart(product) {
  const {cart, totalCount, totalToPay, deleteFromCart, deleteAllFromCart} = useContext(cartContext);


  return (
    <>
    {!cart.length 
    ? <h2 style={{textAlign:'center'}}> Carrito Vacio <Link to="/"><Button className='btn btn-success text-center m-4'>Ir al Home</Button></Link></h2> 
    :
    <div>  
    <span className='d-flex flex-wrap justify-content-center text-center'>    
    {cart.map((item) =>(      
      <Card key={item.id} style={{ width: '18rem', height:'auto', alignContent:'center', alignItems:'center', textAlign:'center', margin:'10px'}}>
        <Card.Img style={{height:'12rem', width:'100%'}}variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text className='justify'>Cantidad {item.count}</Card.Text>
          <Card.Text className='justify'>Subtotal $ {item.count * item.price}</Card.Text>
          <span onClick={()=> deleteFromCart(item.id)}>
          <svg style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </span>      
      </Card.Body>
    </Card>       
    ))}
    </span>

        <span className='d-flex d-wrap justify-content-center'>
      <Card style={{ width: '18rem', height:'auto', alignContent:'center', alignItems:'center', textAlign:'center', margin:'10px'}}>        
        <Card.Body>          
          <Card.Text className='justify' style={{fontSize:'1.2rem', fontWeight:'bold'}}>Cantidad Total {totalCount} Items</Card.Text>
          <Card.Text className='justify' style={{fontSize:'1.2rem', fontWeight:'bold'}}>Total $ {totalToPay}</Card.Text>          
        </Card.Body>
        <Link to="/CheckOut">
      <Button className='btn btn-success' style={{ alignContent:'center', alignItems:'center', textAlign:'center', width:'auto' }}>Finaliza Compra</Button>
    </Link>            
      <Button className='btn btn-danger m-3' onClick={deleteAllFromCart}>Vaciar Carrito</Button>
      </Card>
      
    </span> 
    </div> 
    }    
    
    </>
      
  )
}
