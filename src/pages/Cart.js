import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div>

      <h2 className="title">Cart Items</h2>

      <div className="cart">

        {cartItems.length === 0 ? (
          <h3>Your cart is empty 🛒</h3>
        ) : (
          cartItems.map((item) => (
            <div className="product" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <p>Qty: {item.quantity}</p>

              <div style={{ display: "flex", gap: "10px" }}>

                <button onClick={() => dispatch(addToCart(item))}>+</button>

                <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>

              </div>

            </div>
          ))
        )}

      </div>

      {cartItems.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>

          <h3>Total Items: {totalItems}</h3>
          <h3>Total Price: ₹{totalPrice}</h3>

          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>

        </div>
      )}

    </div>
  );
}

export default Cart;