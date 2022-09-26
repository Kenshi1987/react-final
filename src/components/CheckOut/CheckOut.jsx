import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { cartContext } from '../../context/CartContextComponent';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

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
    ? "Gracias por su Compra. Tu id es : " + orderId 
    :
    
    <div className="text-center mt-5" >
    <h1 className='text-center mt-5'>Formulario de Contacto</h1>
    <Form className="text-center"style={{width:"auto"}}>
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
        <Form.Control type="number" placeholder="Ingrese Telefono de Contacto" onChange={(e)=>setTel(e.target.value)}/>        
      </Form.Group>      
    </Form>

    <Button className="text-center mt-5" variant="success" type="submit" onClick={validateForm}>Finalizar Compra</Button>
    </div>
  } 
  </>
  );
}

 
