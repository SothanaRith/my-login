import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Item = ({ data }) => {


    return (
        <div className="product_shop">


            <div className="item_shop">

                {data.map(item => (

                    <div className="card_shop" key={item.product_id}>
                        <div className="box_shop">
                            
                            <Link to={`/Detail/${item.product_id}`}>{item.image && <img src={item.image} alt="" />}</Link>

                        </div>

                        <Link to={`/Detail/${item.product_id}`}><a>{item.name}</a></Link>

                        <div className="buy_shop">
                            
                            <h2>{item.price}$</h2>
                            <button>Add to cart</button>
                            <div className="feel">
                            <h2>{item.kind_product}</h2>
                                <h2>{item.brand}</h2>
                            </div>

                        </div>


                    </div>

                ))}

            </div>

        </div>

    )
}
export default Item;

