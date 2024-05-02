import React from 'react';
import '../styles/cards.css'

const TescoCards = ({item, handleClick}) => {
    const {title, discription, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{discription}</p>
            <p>Price - £{price} Pounds</p>
            <br></br>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default TescoCards
