import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="landing-footer">

      <div className="landing-container footer-grid">

        <div className="footer-brand">

          <div className="footer-logo">

            <span>
              <Leaf size={18} />
            </span>

            <div>
              <strong>FarmLink</strong>

              <small>
                Connect. Grow. Thrive.
              </small>
            </div>

          </div>

          <p>
            Connecting farmers, buyers,
            and communities through better
            agricultural opportunities.
          </p>

        </div>


        <div>
          <h4>Company</h4>

          <span>About Us</span>
          <span>How It Works</span>
          <span>Why FarmLink</span>
          <span>Features</span>
        </div>


        <div>
          <h4>For Farmers</h4>

          <span>Register as Farmer</span>
          <span>Farmer Login</span>
          <span>My Farm</span>
        </div>


        <div>
          <h4>For Buyers</h4>

          <span>Shop Products</span>
          <span>My Orders</span>
          <span>Help & Support</span>
        </div>


        <div>
          <h4>Support</h4>

          <span>Help Center</span>
          <span>Contact Us</span>
          <span>Report a Problem</span>
        </div>

      </div>


      <div className="landing-container footer-bottom">

        <span>
          © 2026 FarmLink.
          All rights reserved.
        </span>

        <span>
          Terms of Service &nbsp; | &nbsp;
          Privacy Policy
        </span>

      </div>

    </footer>
  );
}