import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Tescoamazon from './components/Tescoamazon';
import Aldiamazon from './components/Aldiamazon';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item, source) => {
    let isPresent = false;

    // Check if the item is already present in the cart
    cart.forEach((product) => {
      if (item.id === product.id && product.source === source) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, { ...item, source }]);
  };

  const handleChange = (item, d) => {
    const updatedCart = cart.map((product) => {
      if (product.id === item.id && product.source === item.source) {
        return { ...product, amount: product.amount + d };
      }
      return product;
    });

    setCart(updatedCart);
  };

  const handleRefresh = () => {
    // Show message that data is being updated
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
      window.location.reload(); // Refresh the page
    }, 2000); // Adjust the time as needed
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      <div className="refresh_button">
        <button onClick={handleRefresh}>Refresh Page</button>
        {warning && <p>Data is being updated...</p>}
      </div>
      {show && <Amazon handleClick={(item) => handleClick(item, 'Amazon')} />}
      {!show && <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
      {warning && <div className='warning'>Item is already added to your cart</div>}
    </React.Fragment>
  );
};

export default App;








// // this was the original version

// // import React , {useState} from 'react';
// // import Navbar from './components/Navbar';
// // import Tescoamazon from './components/Tescoamazon';
// // import Aldiamazon from './components/Aldiamazon';
// // import Amazon from './components/Amazon';
// // import Cart from './components/Cart';
// // import './styles/amazon.css';


// // const App = () => {
// // 	const [show, setShow] = useState(true);
// // 	const [cart , setCart] = useState([]);
// // 	const [warning, setWarning] = useState(false);




// // 	const handleClick = (item)=>{
// // 		let isPresent = false;
// // 		cart.forEach((product)=>{
// // 			if (item.id === product.id)
// // 			isPresent = true;
// // 		})
// // 		if (isPresent){
// // 			setWarning(true);
// // 			setTimeout(()=>{
// // 				setWarning(false);
// // 			}, 2000);
// // 			return ;
// // 		}
// // 		setCart([...cart, item]);
// // 	}

// // 	const handleChange = (item, d) =>{
// // 		let ind = -1;
// // 		cart.forEach((data, index)=>{
// // 			if (data.id === item.id)
// // 				ind = index;
// // 		});
// // 		const tempArr = cart;
// // 		tempArr[ind].amount += d;

// // 		if (tempArr[ind].amount === 0)
// // 			tempArr[ind].amount = 1;
// // 		setCart([...tempArr])
// // 	}

// //   return (
// // 	<React.Fragment>
// // 		<Navbar size={cart.length} setShow={setShow} />
// // 		{
// // 			show ? <Tescoamazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
// // 		}
// //     {
// //       show ? <Aldiamazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
// //     }
// //     {
// //       show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
// //     }
// // 		{
// // 			warning && <div className='warning'>Item is already added to your cart</div>
// // 		}
// // 	</React.Fragment>
// //   )
// // }

// // export default App



// App.js
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [html, setHtml] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPage = async () => {
//       try {
//         const options = {
//           headers: {
//             // Set the User-Agent header to mimic Chrome
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
//           }
//         };

//         const response = await fetch('http://localhost:3001/fetch-page?url=https://groceries.asda.com/product/beef-burgers-bbq/asda-succulent-8-beef-burgers/910002976720', options);
//         if (!response.ok) {
//           throw new Error('Failed to fetch page');
//         }
//         const htmlContent = await response.text();
//         setHtml(htmlContent);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPage();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Raw HTML Data:</h1>
//       <pre>{html}</pre>
//     </div>
//   );
// }

// export default App;




