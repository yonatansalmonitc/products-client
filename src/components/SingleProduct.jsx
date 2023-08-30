import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const [productInfo, setProductInfo] = useState({})

  const {id} = useParams()


  const getSingleProduct = async() => {
     try {

      const res = await axios.get(`http://localhost:8080/products/${id}`)
      setProductInfo(res.data)

     }catch(err) {
      console.log(err)
     }
  }
  
  useEffect(() => {
    getSingleProduct()
  }, [])

  return (
    <div className='SingleProductContainer'>
        <h1>{productInfo.name}</h1>
        <h3>${productInfo.price}</h3>
        <img src={productInfo.productImage} alt={productInfo.name}/>
    </div>
  )
}

export default SingleProduct