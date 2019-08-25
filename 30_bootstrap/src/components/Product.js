import React, { Component } from 'react'
import './Product.css'

export class Product extends Component {
    render() {
        let {id, name, price, picSource} = this.props.productInfo
        console.log(picSource)
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img alt="smart phone" src={picSource} />
                    <div className="caption">
                        <p>Product {id}</p>
                        <p>{name}</p>
                        <p>{price} VND</p>
                        <p>
                            <button className="btn btn-primary">Buy</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
