import Cart from '../Cart';
function Order({
  cart,
  cartCost,
  cartCount,
  setCart,
  setCartCost,
  setCartCount,
}) {
  return (
    <>
      {cart &&
        cart.map((itemInCart, index) => {
          console.log('Cart order' + cart);
          return (
            <Cart
              cart={itemInCart}
              key={index}
              setCart={setCart}
              cartArray={cart}
              setCartCost={setCartCost}
              cartCost={cartCost}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          );
        })}
    </>
  );
}

export default Order;
