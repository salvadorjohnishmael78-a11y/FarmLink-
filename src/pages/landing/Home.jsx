import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import products from "../../data/products";

function Home() {
  const categories = [
    { name: "Vegetables", icon: "🥬" },
    { name: "Fruits", icon: "🍎" },
    { name: "Grains", icon: "🌾" },
    { name: "Dairy", icon: "🥛" },
    { name: "Herbs & Spices", icon: "🌿" },
    { name: "Livestock", icon: "🐔" },
    { name: "Processed Products", icon: "🍯" },
    { name: "Organic", icon: "🍃" },
  ];

  return (
    <div className="home">
      <Navbar />

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-brand">🌿</div>
            <h1>FarmLink</h1>
            <h2>From Our Farms to Your Table</h2>
            <p>Fresh produce. Better livelihoods. A stronger community.</p>
            <p className="hero-description">
              FarmLink connects local farmers, buyers, and communities through
              a convenient and reliable marketplace.
            </p>
            <a href="#products" className="hero-button">
              Shop Fresh Produce →
            </a>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefit">
          <div className="benefit-icon">👨‍🌾</div>
          <div>
            <h3>Support Local Farmers</h3>
            <p>Help local farmers grow and thrive in their communities.</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">🥬</div>
          <div>
            <h3>Fresh & Quality Products</h3>
            <p>Get fresh, quality farm products directly from the source.</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">🛡️</div>
          <div>
            <h3>Easy & Secure Transactions</h3>
            <p>Simple, secure, and reliable buying and selling.</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">🤝</div>
          <div>
            <h3>Stronger Communities</h3>
            <p>Building a healthier and more sustainable future.</p>
          </div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Shop by Category</h2>
          <p>Explore fresh and high-quality farm products from local farmers.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.name}>
              <div className="category-image">{category.icon}</div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="#products">View All Categories →</a>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <span>FRESH FROM LOCAL FARMS</span>
          <h2>🌿 Featured Products</h2>
          <p>Fresh picks from our local farmers.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all">
          <a href="#products">View All Products →</a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-content">
          <div className="about-text">
            <span>ABOUT FARMLINK</span>
            <h2>Empowering Farmers. Feeding Communities.</h2>
            <p>
              FarmLink is a community-driven marketplace that connects local
              farmers directly with buyers.
            </p>
            <p>
              We aim to create a fairer, more sustainable food system by
              giving farmers better opportunities and providing consumers with
              fresh, high-quality produce.
            </p>
            <a href="#about" className="about-button">
              Learn More About Us →
            </a>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=80"
              alt="Local farmer"
            />
            <div className="quote">“Local farmers.<br />A brighter tomorrow.”</div>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-heading">
          <span>OUR PROMISE</span>
          <h2>🌿 Why Choose FarmLink?</h2>
          <p>We bring farmers and buyers closer together, creating a fairer food market.</p>
        </div>

        <div className="why-grid">
          {[
            ["🌱", "Local Produce", "Fresh from local farms."],
            ["👥", "Fair Trade", "Better for everyone."],
            ["🛡️", "Trusted Platform", "Safe and secure."],
            ["🌿", "Sustainable Future", "For generations to come."],
          ].map(([icon, title, text]) => (
            <div className="why-card" key={title}>
              <div>{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="connection-section">
        <div className="connection-content">
          <span>🌿</span>
          <h2>Connecting Farmers, Buyers, and Fresh Products.</h2>
          <p>
            FarmLink makes it easier to discover fresh local products while
            supporting Filipino farmers.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
