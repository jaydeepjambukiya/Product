import { useEffect, useState } from "react";
import "../css/product.css";
import defaultImg from "../assets/default-product.png";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/products");
    const result = await res.json();
    setProducts(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     <div className="product-container">
      {products.map((item) => (
        <div className="product-card" key={item._id}>
          <img
            src={item.image || defaultImg}
            alt={item.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImg;
            }}
            className="product-img"
          />

          <div className="card-body">
            <h3>{item.name}</h3>
            <p className="desc">{item.description}</p>

            <div className="price-rating">
              <span className="price">₹{item.price}</span>
              <span className="rating">⭐ {item.rating}</span>
            </div>

            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default Product;
