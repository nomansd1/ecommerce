import React from 'react'
import './Home.css'
import { useStateValue } from './StateProvider'


// importing trending products pics
import pod1 from './photos/product-1.jpg'
import pod2 from './photos/product-2.jpg'
import pod3 from './photos/product-3.jpg'
import pod4 from './photos/product-4.jpg'
import pod5 from './photos/product-5.jpg'
import pod6 from './photos/product-6.jpg'
import pod7 from './photos/product-7.jpg'
import pod8 from './photos/product-8.jpg'
import pod9 from './photos/product-9.jpg'


function Product({ id, title, price, image }) {


    const [{basket},dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                price:price,
                image:image,
            },
        });
    };
    
    return (
            //  PRODUCT
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product text-center">
                    <div className="position-relative mb-3">
                        <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={image} alt="..." /></a>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                                <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                                <li className="list-inline-item m-0 p-0"><button className="btn btn-sm btn-danger" onClick={addToBasket}>Add to cart<span></span></button></li>
                                <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark"  data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <h6> <a className="products__links" href="detail.html">{title}</a></h6>
                    <p className="small text-light"> {price} </p>
                </div>
            </div>
    )
}

export default Product
