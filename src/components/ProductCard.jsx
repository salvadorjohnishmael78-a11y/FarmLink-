import { useState } from "react";

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("farmlink_cart") || "[]");
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("farmlink_cart", JSON.stringify(cart));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        <button className="favorite-button">♡</button>
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>

        <div className="product-price">
          ₱{product.price.toFixed(2)}
          <span>/{product.unit}</span>
        </div>

        <p className="product-farmer">{product.farmer}</p>
        <p className="product-location">📍 {product.location}</p>
        <div className="product-rating">⭐ {product.rating}</div>

        <button className="add-cart-button" onClick={addToCart}>
          {added ? "✓ Added to Cart" : "🛒 Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
