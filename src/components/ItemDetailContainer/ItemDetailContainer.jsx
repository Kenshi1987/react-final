import React, {useEffect, useState} from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import RingLoader from 'react-spinners/RingLoader'



export default function ItemDetailContainer() {

  const [product, setProduct]=useState({});
  const {idItem} = useParams();
  

  useEffect (()=>{

    const db = getFirestore();
    const refDoc = doc(db,'Productos',idItem);
     

    getDoc(refDoc).then((item)=>{
       const aux = {
        ...item.data(),
        id: item.id,
       }

       setProduct(aux);
    });
  }, [idItem]); 

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
  <ItemDetail product={product}/>
  }
  </>
    )
}
