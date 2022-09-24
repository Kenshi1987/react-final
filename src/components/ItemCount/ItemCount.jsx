import React from 'react'
import { useState } from 'react'
import {Button} from 'react-bootstrap'

export default function ItemCount({product}) {
 
 const [count, setCount] = useState(1);
 function sum(){
  setCount(count + 1);

 }

 function res (){
  setCount(count - 1);

 }

 function onAdd(){
  alert('Quiero Agregar' + count + "de este Articulo" + JSON.stringify(product));
 }
  
 
     return (
    <div className='m-5'>
      
      <Button className="btn btn-success btn-lg m-3" onClick={res} disabled={count===1}>-</Button>
      <span className='fs-4 fw-bold'>{count}</span>
      <Button className="btn btn-success btn-lg m-3" onClick={sum} disabled={count===product.stock}>+</Button>
      <Button className="btn btn-success btn-lg m-3" onClick={()=>onAdd(count)} disabled={count ===0}>Agregar al Carrito</Button>
    
      
    </div>
  );
}