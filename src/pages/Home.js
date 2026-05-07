import ProductCard from "../components/ProductCard";

import laptop from "../images/laptop.jpg";
import mobile from "../images/mobile.jpg";
import headphones from "../images/headphones.jpg";

function Home() {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: laptop
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: mobile
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image: headphones
    }
  ];

  return (
    <div>
      <h2 className="title">Products</h2>
      <div className="products">
      {
        products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))
      }
</div>
    </div>
  );
}

export default Home;