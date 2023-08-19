import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bg from "./image/main.jpg"
const Detail = () => {
    const [list, setList] = useState([])
    const location = useLocation()
    const productID = location.pathname.split("/")[2]
    useEffect(() => {
        const fecthAlldetail = async () => {
            try {
                const res = await axios.get("http://localhost:8080/pcs/product/getProductOne/" + productID)
                // {
                //     headers:{Authorization:"Bearer "+ data.accessToken}
                // })
                setList(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        fecthAlldetail()
    }, [])
    

    // const handleDelete = async (product_id) =>{
    //   try{
    //       await axios.delete("http://localhost:8080/pcs/"+product_id)
    //       //refrest page
    //       window.location.reload()

    //   }catch(err){
    //       console.log(err)
    //   }
    // }



    //make for Detail function item in button Detail



    const getText =(html) =>{
        const doc = new DOMParser().parseFromString(html,"text/html")
        return  doc.body.textContent
      }
    



    return (
        <div className="detail" >
            {list.map(item => (
                
                <div key={item.product_id} className="wrapper">
                    <div className="img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="info">
                        <div className="title">
                            <h1>{item.name}</h1>
                        </div>
                        <div className="desc">
                            <p> <h1>Post code: </h1> {item.code}</p>
                            <p> <h1>Brand: </h1> {item.brand}</p>
                            <p> <h1>type: </h1> {item.kind_product}</p>
                        </div>
                        <div className="desc">
                         <h1>Detail</h1> {getText (item.description)}
                        </div>
                        <div className="price">
                            <h1>{item.price}$</h1>
                        </div>
                        {/* <div className="option">
                            <div className="Ram">
                                <select>
                                    <option value="">8G</option>
                                    <option value="">16G</option>
                                    <option value="">32G</option>

                                </select>

                            </div>
                            <div className="memory">
                                <select>
                                    <option value="">256G</option>
                                    <option value="">512G</option>
                                    <option value="">1TB</option>

                                </select>

                            </div>


                        </div> */}


                        <a href="https://t.me/NarithB"><button>Contact</button></a>

                    </div>




                </div>


            ))}

        </div>
    )

}
export default Detail;