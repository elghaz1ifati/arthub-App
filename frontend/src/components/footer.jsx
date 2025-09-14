import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          {/* Brand / Logo */}
          <div className="col-md-3">
            <div className="footer-logo">
              <img src="/logo.png" alt="arthubLogo" />
              <span>ArtHub</span>
            </div>
            <p className="text-secondary">
              Share your perspective.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social / Connect */}
          <div className="col-md-3">
            <h6>Connect</h6>
            <div className="d-flex gap-3">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top mt-4 pt-3 text-center">
          <p className="mb-0">© 2024 ArtHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
