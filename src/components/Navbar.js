import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const { cartItems } = useSelector((state) => state.cart);

  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="navbar">

      <h2 className="title">Shopping Store 🛒</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
          Cart
          {totalCount > 0 && (
            <span className="badge">{totalCount}</span>
          )}
        </Link>

      </div>

    </div>
  );
}

export default Navbar;