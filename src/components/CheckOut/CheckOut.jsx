import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { cartContext } from '../../context/CartContextComponent';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './CheckOut.css'
import { Link } from 'react-router-dom';

export default function CheckOut() {

  const {totalToPay, cart, deleteAllFromCart} = useContext(cartContext);
  const [name, setName] = useState ("");
  const [tel, setTel] = useState ("");
  const [email, setEmail] = useState ("");
  const [orderId, setOrderId] = useState("");

  function validateForm(){
    const order = {
      buyer: {name, tel, email},
      totalToPay,
      cart,
    };

    const db = getFirestore();
    const orders = collection (db, 'Orders');

    addDoc(orders, order).then(({id}) =>{
      setOrderId(id)
      deleteAllFromCart();
    });   
  }

  return (
    <>
    {orderId
    ?  
      <div>
      <p className='text-center fs-2'>Gracias por su compra. Su numero de ID es {orderId}.</p>
      <Link to='/' style={{textDecoration:'none', color:'white'}}><Button className='btn btn-success d-flex flex-wrap justify-content-center text-center'>Ir al Home</Button></Link>
      </div>

    :    
    <div className="text-center m-5 d-flex align-items-center justify-content-center flex-column" >
    <h1 className='text-center'>Formulario de Contacto</h1>
    <div className='w-75 text-center border border-3 mt-3 p-1'>
    
    <Form className="text-center" style={{width:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Ingrese Nombre" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="mail" placeholder="Ingrese email" onChange={(e)=>setEmail(e.target.value)} />        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="tel" placeholder="Ingrese Telefono de Contacto" onChange={(e)=>setTel(e.target.value)}/>        
      </Form.Group>      
    </Form>
    </div>

    <div>
    <Button className="text-center mt-5" variant="success" type="submit" onClick={validateForm} disabled={name==="" || tel==="" || email===""}>Finalizar Compra</Button>
    </div>
    </div>    
    
  }      
  </>
  );
}

 
