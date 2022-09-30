import React, {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader'



export default function ItemListContainer() {

  const [products, setProducts]=useState([]);
  const {idCategory} = useParams();
  
  useEffect (()=>{

    const db = getFirestore();
    let miCollection;
    
    //Home o sin Categoria Definida
    if (idCategory === undefined) {
      miCollection = collection(db, "Productos");
    } else {
      miCollection = query(
        collection(db, "Productos"), 
        where("idCategory","==",idCategory)
        );
    }

    getDocs(miCollection).then((data)=>{
       const auxProducts = data.docs.map(product => ({
        ...product.data(),
        id: product.id,
       }));
       setProducts(auxProducts);
    });
  }, [idCategory]); 

  //Spinner
  const [loading, setLoading] = useState (false);
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }, [])

  return (
    <>
  {
    loading ?
    <RingLoader className='position-absolute top-50 start-50 translate-middle'color="#bb36d6" cssOverride={{}} loading speedMultiplier={1}/>

    :    
    <ItemList products={products}/>
  }
  </>
  )
    
  }   
