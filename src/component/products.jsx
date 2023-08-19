import React,{useState,useEffect} from "react";
import axios from "axios";
import Product from "./product";
const Products = ()=>{
    const [list,setList] = useState([])

    useEffect(()=>{
      const fecthAllProducts= async()=>{
          try{
              const res = await axios.get("http://localhost:8080/pcs/product/getProductLimit")
              setList(res.data)
          }catch(err){
              console.log(err)
          }
      }
      fecthAllProducts()
    },[])
  
    return(
        <div className="products">
            {list.map(item=>(
                <Product item ={item} key={item.product_id}/>
            ))}
            
        </div>
    )

}
export default Products;