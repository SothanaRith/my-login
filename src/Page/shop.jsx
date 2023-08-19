import React,{useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import Navber from '../component/navber'
import Item from "../component/item";
import Footer from '../component/Footer';
import axios from "axios";

const Shop = () => {
    const [list,setList] = useState([])

  useEffect(()=>{
    const fecthAllShop= async()=>{
        try{
            const res = await axios.get("http://localhost:8080/pcs/product/getproductAll")
            setList(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fecthAllShop()
  },[])

  

  // fliter 
  const [query, setQuery] = useState("");
  const search =(data) =>{
    return data.filter((item)=> item.name.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query)|| item.kind_product.toLowerCase().includes(query));
  }

    return(
        <div>
            
            <div className="shop">
                <br />
                <Navber/>
                <div className="benner_shop">
                    <div className="txt_shop">
                        <h1>Store</h1>
                        <h2>Find in to Gaming Laptop</h2>
                        <div className="search_shop">
                            <input type="text" id="search" placeholder="Search" onChange={(e)=> setQuery(e.target.value)}/>
                            <Link to="/"><i className="fa fa-search" aria-hidden="true" ></i></Link>
                        </div>



                    </div>
                </div>
                
                {/* <div className="filterContainer_shop">
                    <div className="filter_shop">
                        <div className="selete">
                            <h1>fliter Products</h1>
                            <select>
                                <option value="">All Products</option>
                                <option value="">Apple</option>
                                <option value="">MSI</option>
                                <option value="">Asus</option>
                                <option value="">Lenovo</option>
                                <option value="">Acer</option>
                                <option value="">HP</option>
                                <option value="">Dell</option>
                                <option value="">Microsoft</option>
                            </select>
                            <select>
                                <option value="">All Type</option>
                                <option value="">Gaming</option>
                                <option value="">Design</option>
                                <option value="">Work</option>
                                <option value="">Education</option>
                            </select>
                        </div>
                        <div className="selete">
                            <h1>Short Products</h1>
                            <select>
                                <option value="">All Price</option>
                                <option value="">100$-500$</option>
                                <option value="">501$-1000$ up</option>

                            </select>
                        </div>
                        
                       
                    </div>

                </div> */}
                <Item data={search(list)}/>
            </div>
            <Footer/>
            
            

        </div>
    )
}

export default Shop;