import React from 'react'
import './Cart.css'

import { NavLink } from 'react-router-dom'
import pod1 from './photos/product-1.jpg'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, image, title, price }) {
    
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket= () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    return (

        <tr>
            <th className="pl-0 border-0" scope="row">
                <div className="media align-items-center d-flex"><NavLink className="reset-anchor d-block" to="/apparel"><img src={pod1} alt="..." width="70" /></NavLink>
                    <div className="media-body ml-3"><strong className="h6"><NavLink to="/apparel" className="product__name">{title}</NavLink></strong></div>
                </div>
            </th>
            <td className="align-middle border-0">
                <p className="mb-0 small"> {price} </p>
            </td>

            <td className="align-middle border-0"><button className="btn btn-danger" onClick={removeFromBasket}>Remove from cart</button></td>
        </tr>

    )
}

export default CheckoutProduct
