import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

// product component
import Product from './Product'

// importing categories images
import cat1 from './photos/cat-img-1.jpg'
import cat2 from './photos/cat-img-3.jpg'
import cat3 from './photos/cat-img-4.jpg'
import cat4 from './photos/cat-img-2.jpg'

// importing trending prducts pics
import pod1 from './photos/product-1.jpg'
import pod2 from './photos/product-2.jpg'
import pod3 from './photos/product-3.jpg'
import pod4 from './photos/product-4.jpg'
import pod5 from './photos/product-5.jpg'
import pod6 from './photos/product-6.jpg'
import pod7 from './photos/product-7.jpg'
import pod8 from './photos/product-8.jpg'
import pod9 from './photos/product-9.jpg'


function Home() {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="container banner__details">
                        <span>fashion catalog 2020</span>
                        <h2>hipster fashion trend 2020</h2>
                        <NavLink to="/apparel"><button className="btn__button">shop now<span></span></button></NavLink>
                    </div>


                </div>
            </div>

            <div className="container bg-dark pb-5">
                {/* categories section */}
                <div className=" categories">
                    <header className="text-center">
                        <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
                    </header>
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0"><NavLink className="category-item" to="/apparel"><img className="img-fluid" src={cat1} alt="" /><strong className="category-item-title">Clothes</strong></NavLink></div>
                        <div className="col-md-4 mb-4 mb-md-0"><a className="category-item mb-4" href="shop.html"><img className="img-fluid" src={cat2} alt="" /><strong className="category-item-title">Shoes</strong></a><a className="category-item" href="shop.html"><img className="img-fluid" src={cat4} alt="" /><strong className="category-item-title">Watches</strong></a></div>
                        <div className="col-md-4"><a className="category-item" href="shop.html"><img className="img-fluid" src={cat3} alt="" /><strong className="category-item-title">Electronics</strong></a></div>
                    </div>
                </div>

            </div>

            <div className="container bg-dark mt-5 mb-5">
                {/* trending section */}
                <div className="py-5">
                    <header className="text-center text-light" >
                        <p className="small text-light small text-uppercase mb-1">Made the hard way</p>
                        <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
                    </header>
                    <div className="row">
                        <Product
                            id="122435"
                            title="Kui Ye Chen’s AirPods"
                            price="$250"
                            image={pod1}
                        />
                        <Product
                            id="13456"
                            title="Air Jordan 12 gym red"
                            price="$351"
                            image={pod2}
                        />
                        <Product
                            id="164643"
                            title="Cyan cotton t-shirt"
                            price="$25"
                            image={pod3}
                        />
                        <Product
                            id="1245345"
                            title="Timex Unisex Originals"
                            price="$351"
                            image={pod4}
                        />
                    </div>
                    <div className="row">
                        <Product
                            id="764623"
                            title="Red digital smartwatch"
                            price="65334"
                            image={pod5}
                        />
                        <Product
                            id="45635"
                            title="Nike air max 95"
                            price="$300"
                            image={pod6}
                        />
                        <Product
                            id="34355"
                            title="Joemalone Women prefume"
                            price="$25"
                            image={pod7}
                        />
                        <Product
                            id="12343"
                            title="air jordan b66"
                            price="767"
                            image={pod8}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home