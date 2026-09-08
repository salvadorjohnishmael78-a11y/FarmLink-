function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <span>🌿</span>
          FarmLink
        </a>

        <nav className="nav-menu">
          <a href="#home" className="active">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="nav-right">
          <a href="/login" className="register-button">🔒 Login / Register</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
