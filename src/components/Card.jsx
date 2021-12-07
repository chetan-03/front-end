import React from 'react'
import '../App.css'
const Card = ({ id, discount, rating, earliest_shipping, product_image, price, createdAt, description, category, title }) => {
    return (
        <div className="card">
            <h1> { title }</h1>
            <img src={ product_image } width='90px' height='90px' alt="not found" />
            description : <p>{ description }</p>
            rating : { rating }

        </div>
    )
}

export default Card
