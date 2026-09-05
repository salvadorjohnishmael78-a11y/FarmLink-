import {
  Leaf,
  LogIn,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };

  return (
    <header className="landing-navbar">

      <div className="landing-container navbar-inner">

        <button
          className="farmlink-logo"
          onClick={() => goTo("home")}
        >
          <span className="logo-icon">
            <Leaf size={19} />
          </span>

          <span>
            <strong>FarmLink</strong>
            <small>
              Connect. Grow. Thrive.
            </small>
          </span>
        </button>


        <nav
          className={
            open
              ? "landing-nav-links open"
              : "landing-nav-links"
          }
        >

          <button
            className="nav-active"
            onClick={() => goTo("home")}
          >
            Home
          </button>

          <button
            onClick={() => goTo("about")}
          >
            About Us
          </button>

          <button
            onClick={() => goTo("how")}
          >
            How It Works
          </button>

          <button
            onClick={() => goTo("why")}
          >
            Why FarmLink
          </button>

          <button
            onClick={() => goTo("features")}
          >
            Features
          </button>

          <button
            className="navbar-register"
            onClick={() =>
              (window.location.href =
                "/register/farmer")
            }
          >
            Become a Farmer
          </button>

          <button className="navbar-login">
            <LogIn size={14} />
            Log In
          </button>

        </nav>


        <button
          className="mobile-navbar-button"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  );
}