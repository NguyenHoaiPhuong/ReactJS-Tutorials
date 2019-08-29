import React, { Component } from 'react'
import Product from './Product';

class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 6 plus',
                    price: 16000000,
                    picSource: '/images/iphone-6-plus.jpg',
                },
                {
                    id: 2,
                    name: 'Iphone 7',
                    price: 22000000,
                    picSource: '/images/iphone-7.jpg',
                },
                {
                    id: 3,
                    name: 'Samsung galaxy A7',
                    price: 10000000,
                    picSource: '/images/galaxy_a7_2018.webp',
                },
                {
                    id: 4,
                    name: 'Samsung galaxy A8',
                    price: 15000000,
                    picSource: '/images/galaxy_a8.jpg',
                }
             ],
        }
    }
    
    render() {
        let products = this.state.products.map(product => <Product key={product.id} productInfo={product} />)
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

export default Products
