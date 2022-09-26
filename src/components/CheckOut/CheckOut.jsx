import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CheckOut() {
  return (
    <>
    <h1 className='text-center mt-5'>Formulario de Contacto</h1>
    <div className="text-center mt-5" >
    <Form className="text-center"style={{width:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Ingrese Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="mail" placeholder="Ingrese email" />        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" placeholder="Ingrese Telefono de Contacto" />        
      </Form.Group>      
    </Form>

    <Button className="text-center mt-5" variant="success" type="submit">
        Finalizar Compra
      </Button>
    </div>

    
    </>
  );
}

 
