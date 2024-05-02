import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            {/* <p>Price - £{price} Pounds</p> */}
            <br></br>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards


// import React from 'react';
// import '../styles/cards.css'

// const Cards = ({ item, handleClick }) => {
//     const { title, author, price, img } = item;

//     const handleRefresh = () => {
//         window.location.reload(); // Refresh the page
//         alert("Refreshing data..."); // Pop a message saying data is being refreshed
//     };

//     return (
//         <div className="cards">
//             <div className="details">
//                 <button onClick={handleRefresh}>Refresh</button> {/* Button to trigger refresh */}
//                 <p>{title}</p>
//                 <p>{author}</p>
//                 {/* <p>Price - £{price} Pounds</p> */}
//                 <br />
//                 <button onClick={() => handleClick(item)}>Add to Cart</button>
//             </div>
//             <div className="image_box">
//                 <img src={img} alt="Image" />
//             </div>
//         </div>
//     )
// }

// export default Cards;

