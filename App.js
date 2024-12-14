// Project Planing 
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

/*

NavBar 
Logo 
Menu Items

*/
const ProductCard = () => {
    return (
        <>

            <div className="product_cart">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

        </>
    )
}

const Product = () => {
    return (
        <>
            <div className="products" >
                <img src="https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg" />
                <h1>T-shirt</h1>
                <p>3.4 stars</p>
                <p>rs 199</p>

            </div>
        </>
    )
}

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <h1>Logo</h1>
                <ul className="menu_items">
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>Cart</li>
                </ul>
            </div>
            <ProductCard />

        </>
    )
}

const App = () => {
    return (
        <div>
            <NavBar />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)