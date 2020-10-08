import React, { createContext, useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem}}>
				<CartContext.Provider value={{ cart, addItem }}>
					<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>

				</CartContext.Provider>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
