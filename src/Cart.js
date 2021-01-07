import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Cart.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format'

import pod1 from './photos/product-1.jpg'
import CheckoutProduct from './CheckoutProduct';


function Cart() {

    const history = useHistory();
    const [{basket, user }, dispatch] = useStateValue();

    return (
        <div>
            <div className="container">
            <section className="cart__banner py-5">
                <div className="container">
                    <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="h2 text-uppercase mb-0 text-light">Shopping Cart</h1>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            <div className="container">
                <section className="py-5">
                    <h2> {user?.email} </h2>
                    <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
                    <div className="row">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            {/* <!-- CART TABLE--> */}
                            <div className="table-responsive mb-4">
                                <table className="table">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Product</strong></th>
                                            <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Price</strong></th>
                                            <th className="border-0" scope="col"> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                        
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- CART NAV--> */}
                            <div className="bg-light px-4 py-3">
                                <div className="row align-items-center text-center">
                                    <div className="col-md-6 mb-3 mb-md-0 text-md-left"><a className="btn btn-link p-0 text-dark btn-sm" href="shop.html"><i className="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping</a></div>
                                    <div className="col-md-6 text-md-right"><button className="btn btn-outline-dark btn-sm" onClick={e=> history.push('/checkout')}>Proceed to checkout</button></div>
                                </div>
                            </div>
                        </div>            

                        {/* <!-- ORDER TOTAL--> */}
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                        <div className="col-lg-4">
                            <div className="card border-0 rounded-0 p-lg-4 bg-light">
                                <div className="card-body">
                                    <h5 className="text-uppercase mb-4">Cart total</h5>
                                    <ul className="list-unstyled mb-0">
                            <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Subtotal</strong><span className="text-muted small">{value}</span></li>
                                        <li className="border-bottom my-2"></li>
                                        <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>$250</span></li>
                                    </ul>
                                </div>
                            </div>
                            

                        </div>
                        </>
                            )}
                            decimalScale={3}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Cart
