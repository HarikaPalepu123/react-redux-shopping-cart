import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  return (
    <div className="product">
      <img src={product.image} alt="product" width="150"/>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;