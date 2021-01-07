import React from 'react'
import './Apparel.css'

// importing products

import pod1 from './photos/product-1.jpg'
import pod2 from './photos/product-2.jpg'
import pod3 from './photos/product-3.jpg'
import pod4 from './photos/product-4.jpg'
import pod5 from './photos/product-5.jpg'
import pod6 from './photos/product-6.jpg'
import pod7 from './photos/product-7.jpg'
import pod8 from './photos/product-8.jpg'
import pod9 from './photos/product-9.jpg'
import Product from './Product'



function Apparel() {
    return (
        <div>
            <div className="container">
                <section className="apparel__banner py-5">
                    <div className="container">
                        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                            <div className="col-lg-6">
                                <span className='text-light text-uppercase h4'>Premium Collections</span>
                                <h1 className="h2 text-uppercase text-light mb-0 mt-1">Street Style Fashion Catalog</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="container py-5">
                <div className="container bg-dark p-5">
                    <div className="row">

                        {/* <!-- SHOP LISTING--> */}
                        <div className="col-lg-12 order-1 order-lg-2 mb-5 mb-lg-0">

                            <div className="row">
                                {/* <!-- PRODUCT--> */}
                                <Product
                                    id="122435"
                                    title="Kui Ye Chen’s AirPods"
                                    price="$250"
                                    image={pod1}
                                />
                                {/* <!-- PRODUCT--> */}
                                <Product
                                    id="13456"
                                    title="Air Jordan 12 gym red"
                                    price="$351"
                                    image={pod2}
                                />
                                {/* <!-- PRODUCT--> */}
                                <Product
                                    id="164643"
                                    title="Cyan cotton t-shirt"
                                    price="$25"
                                    image={pod3}
                                />
                                {/* <!-- PRODUCT--> */}
                                <Product
                                    id="1245345"
                                    title="Timex Unisex Originals"
                                    price="$351"
                                    image={pod4}
                                />
                            
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="764623"
                                title="Red digital smartwatch"
                                price="65334"
                                image={pod5}
                            />
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="45635"
                                title="Nike air max 95"
                                price="$300"
                                image={pod6}
                            />
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="34355"
                                title="Joemalone Women prefume"
                                price="$25"
                                image={pod7}
                            />
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="12343"
                                title="air jordan b66"
                                price="767"
                                image={pod8}
                            />
                            
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="764623"
                                title="Red digital smartwatch"
                                price="65334"
                                image={pod5}
                            />
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="45635"
                                title="Nike air max 95"
                                price="$300"
                                image={pod6}
                            />
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="34355"
                                title="Joemalone Women prefume"
                                price="$25"
                                image={pod7}
                            />
                            {/* <!-- PRODUCT--> */}
                            <Product
                                id="12343"
                                title="air jordan b66"
                                price="767"
                                image={pod8}
                            />
                            </div>
                            {/* <!-- PAGINATION--> */}
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center justify-content-lg-end">
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Apparel
