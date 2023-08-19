import React from "react";
import { Link } from 'react-router-dom';
const Product = ({ item }) => {
    return (
        <div className="single_product">
            <div className="circle">

            </div>
            <img src={item.image} alt="" />
            <div className="info">

                <Link to={`/Detail/${item.product_id}`}><div className="icon">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div></Link>
                <Link to={`/Detail/${item.product_id}`}><div className="icon">
                    <i className="fa fa-search" aria-hidden="true"></i>

                </div></Link>

                {/* <div className="icon">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div> */}


            </div>

        </div>
    )

}
export default Product;