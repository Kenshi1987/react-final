import React from 'react'
import { useEffect } from 'react';
import { useContext , useState} from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextComponent';
import { Toaster, toast } from 'react-hot-toast';



export default function ItemCount({product}) {
 
 const [count, setCount] = useState(1);
 const [removeButton, setRemoveButton] = useState (false);
 const { cart, addToCart } = useContext (cartContext);
 
 

 function sum(){
  setCount(count + 1);

 }

 function res (){
  setCount(count - 1);

 }

 function onAdd(){  
 addToCart(product, count);
 setRemoveButton(true);
 toast.success('Producto agregado al carrito', {duration:'150'})
 
}
  
    useEffect(()=>{
          },[cart]);

     return (
    <div className='m-5'>
      
      <Button className="btn btn-success btn-lg m-3" onClick={res} disabled={count===1}>-</Button>
      <span className='fs-4 fw-bold'>{count}</span>
      <Button className="btn btn-success btn-lg m-3" onClick={sum} disabled={count===product.stock}>+</Button>
      

      {removeButton ? (
        
        <>        
        <Link to="/">
        <Button className="btn btn-success btn-lg m-3">Seguir Comprando</Button>
          </Link>
          <Link to="/Cart">
        <Button className="btn btn-success btn-lg m-3">Ir al Carrito</Button>
          </Link>
        </>
      ): (
      <Button className="btn btn-success btn-lg m-3" onClick={()=>onAdd(count)} disabled={count ===0}>Agregar al Carrito</Button>
      )}  

      <Toaster/>
    
      
    </div>
  );
}