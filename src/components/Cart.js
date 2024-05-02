
// this is the improved version
// import React, { useState, useEffect } from 'react';
// import '../styles/cart.css';

// const Cart = ({ cart, setCart, handleChange }) => {
//   const [tescoItems, setTescoItems] = useState([]);
//   const [aldiItems, setAldiItems] = useState([]);

//   useEffect(() => {
//     const tescoCart = cart.filter(item => item.source === 'Tesco');
//     const aldiCart = cart.filter(item => item.source === 'Aldi');

//     setTescoItems(tescoCart);
//     setAldiItems(aldiCart);
//   }, [cart]);

//   const handleRemove = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//   };

//   // Calculate total price for Tesco cart
//   const tescoTotalPrice = tescoItems.reduce((acc, item) => acc + item.amount * item.price, 0);

//   // Calculate total price for Aldi cart
//   const aldiTotalPrice = aldiItems.reduce((acc, item) => acc + item.amount * item.price, 0);

//   // Determine which shop is cheaper
//   const cheaperShop = tescoTotalPrice < aldiTotalPrice ? 'Tesco' : 'Aldi';
//   const cheaperShopLink = cheaperShop === 'Tesco' ? 'https://www.tesco.com/' : 'https://www.aldi.co.uk/';

//   return (
//     <article>
//     <div className='cart-container'>
//       <div className='cart-section'>
//         <h1 className='retail-logo'>GrocerySync - Selected Items</h1>
//         {/* Cart items */}
//         {cart.map(item => (
//           <div className='cart-box' key={item.id}>
//             <div className='cart-img'>
//               <img src={item.img} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
//               <p>{item.title}</p>
//             </div>
//             <div className='cart-controls'>
//               <button className='control-button' onClick={() => handleChange(item, +1)}>+</button>
//               <button>{item.amount}</button>
//               <button className='control-button' onClick={() => handleChange(item, -1)}>-</button>
//             </div>
//             <div className='cart-details'>
//               <span>£{item.price}</span>
//               <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//         {/* Total price of GrocerySync Cart */}
//         <div className='total'>
//           {/* <span>Total Price of GrocerySync Cart</span>
//           <span>Pounds - £{cart.reduce((acc, item) => acc + item.amount * item.price, 0)}</span> */}
//         </div>
//       </div>
//         <br></br>
//         <br></br>
//         <br></br>

//         {/* Tesco cart section */}
//         <div className='cart-section'>
//           <h1 className='Retaillogo'>Tesco</h1>
//           {/* Tesco cart items */}
//           {tescoItems.map(item => (
//             <div className='cart-box' key={item.id}>
//               <div className='cart-img'>
//                 <img src={item.img} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
//                 <p>{item.title}</p>
//               </div>
//               <div className='cart-controls'>
//                 <button className='control-button' onClick={() => handleChange(item, +1)}>+</button>
//                 <button>{item.amount}</button>
//                 <button className='control-button' onClick={() => handleChange(item, -1)}>-</button>
//               </div>
//               <div className='cart-details'>
//                 <span>£{item.price}</span>
//                 <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           {/* Total price of Tesco Cart */}
//           <div className='total'>
//             <span>Total Price of Tesco Cart</span>
//             <span className='bold-text'>Pounds - £{tescoTotalPrice}</span>
//           </div>
//         </div>
//         <br></br>
//         <br></br>
//         <br></br>
//         {/* Aldi cart section */}
//         <div className='cart-section'>
//           <h1 className='Retaillogo'>Aldi</h1>
//           {/* Aldi cart items */}
//           {aldiItems.map(item => (
//             <div className='cart-box' key={item.id}>
//               <div className='cart-img'>
//                 <img src={item.img} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
//                 <p>{item.title}</p>
//               </div>
//               <div className='cart-controls'>
//                 <button className='control-button' onClick={() => handleChange(item, +1)}>+</button>
//                 <button>{item.amount}</button>
//                 <button className='control-button' onClick={() => handleChange(item, -1)}>-</button>
//               </div>
//               <div className='cart-details'>
//                 <span>£{item.price}</span>
//                 <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           {/* Total price of Aldi Cart */}
//           <div className='total'>
//             <span>Total Price of Aldi Cart</span>
//             <span className='bold-text'>Pounds - £{aldiTotalPrice}</span>
//           </div>
//         </div>
//       </div>
//       {/* Price comparison section */}
//       <div className='comparison-section'>
//         <h2>Price Comparison</h2>
//         <p>Total Price of Tesco Cart: £{tescoTotalPrice}</p>
//         <p>Total Price of Aldi Cart: £{aldiTotalPrice}</p>
//         <p>{cheaperShop} is cheaper. <a href={cheaperShopLink} target="_blank" rel="noopener noreferrer">{cheaperShop}</a></p>
//       </div>
//     </article>
//   );
// };

// export default Cart;









// this code will be using just the data.js and add the itmes to the right sections

import React, { useState, useEffect } from 'react';
import '../styles/cart.css';
import TescoItems from '../Tesco'; // Import Tesco items
import AldiItems from '../Aldi'; // Import Aldi items

const Cart = ({ cart, setCart }) => {
  const [tescoItems, setTescoItems] = useState([]);
  const [aldiItems, setAldiItems] = useState([]);

  useEffect(() => {
    // Filter Tesco items from TescoItems data and set state
    const tescoCart = TescoItems.filter(item => cart.find(cartItem => cartItem.id === item.id));
    setTescoItems(tescoCart);

    // Filter Aldi items from AldiItems data and set state
    const aldiCart = AldiItems.filter(item => cart.find(cartItem => cartItem.id === item.id));
    setAldiItems(aldiCart);
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const handleChange = (item, amount) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].amount += amount;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...item, amount: 1 }];
      setCart(updatedCart);
    }
  };

  // Calculate total price for Tesco cart
  const tescoTotalPrice = tescoItems.reduce((acc, item) => acc + item.amount * item.price, 0);

  // Calculate total price for Aldi cart
  const aldiTotalPrice = aldiItems.reduce((acc, item) => acc + item.amount * item.price, 0);

  // Determine which shop is cheaper
  const cheaperShop = tescoTotalPrice < aldiTotalPrice ? 'Tesco' : 'Aldi';
  const cheaperShopLink = cheaperShop === 'Tesco' ? 'https://www.tesco.com/' : 'https://www.aldi.co.uk/';

  return (
    <article>
      <div className='cart-container'>
        <div className='cart-section'>
          <h1 className='retail-logo'>GrocerySync - Selected Items</h1>
          {/* Cart items */}
          {cart.map(item => (
            <div className='cart-box' key={item.id}>
              <div className='cart-img'>
                <img src={item.img} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <p>{item.title}</p>
              </div>
              <div className='cart-controls'>
                <button className='control-button' onClick={() => handleChange(item, +1)}>+</button>
                <button>{item.amount}</button>
                <button className='control-button' onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div className='cart-details'>
                <span>£{item.price}</span>
                <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          {/* Total price of GrocerySync Cart */}
          <div className='total'>
            {/* <span>Total Price of GrocerySync Cart</span>
            <span>Pounds - £{cart.reduce((acc, item) => acc + item.amount * item.price, 0)}</span> */}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        {/* Tesco cart section */}
        <div className='cart-section'>
          <h1 className='Retaillogo'>Tesco</h1>
          {/* Tesco cart items */}
          {tescoItems.map(item => (
            <div className='cart-box' key={item.id}>
              <div className='cart-img'>
                <img src={item.img} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <p>{item.title}</p>
              </div>
              <div className='cart-controls'>
                <button className='control-button' onClick={() => handleChange(item, +1)}>+</button>
                <button>{item.amount}</button>
                <button className='control-button' onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div className='cart-details'>
                <span>£{item.price}</span>
                <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          {/* Total price of Tesco Cart */}
          <div className='total'>
            <span>Total Price of Tesco Cart</span>
            <span className='bold-text'>Pounds - £{tescoTotalPrice}</span>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* Aldi cart section */}
        <div className='cart-section'>
          <h1 className='Retaillogo'>Aldi</h1>
          {/* Aldi cart items */}
          {aldiItems.map(item => (
            <div className='cart-box' key={item.id}>
              <div className='cart-img'>
                <img src={item.img} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <p>{item.title}</p>
              </div>
              <div className='cart-controls'>
                <button className='control-button' onClick={() => handleChange(item, +1)}>+</button>
                <button>{item.amount}</button>
                <button className='control-button' onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div className='cart-details'>
                <span>£{item.price}</span>
                <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          {/* Total price of Aldi Cart */}
          <div className='total'>
            <span>Total Price of Aldi Cart</span>
            <span className='bold-text'>Pounds - £{aldiTotalPrice}</span>
          </div>
        </div>
      </div>
      {/* Price comparison section */}
      <div className='comparison-section'>
        <h2>Price Comparison</h2>
        <p>Total Price of Tesco Cart: £{tescoTotalPrice}</p>
        <p>Total Price of Aldi Cart: £{aldiTotalPrice}</p>
        <p>{cheaperShop} is cheaper. <a href={cheaperShopLink} target="_blank" rel="noopener noreferrer">{cheaperShop}</a></p>
      </div>
    </article>
  );
};

export default Cart;



