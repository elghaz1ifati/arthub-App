import "../css/features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="h3 fw-bold text-center">Why Choose ArtHub?</h2>
        <div className="row g-4 text-center">
          <div className="col-md-4 feature-text">
            <div className="feature-icon star mb-3">
              <i className="fas fa-star fs-4"></i>
            </div>
            <h5>Honest Reviews</h5>
            <p>
              Get genuine feedback from a community of photography enthusiasts
              and professionals.
            </p>
          </div>
          <div className="col-md-4 feature-text">
            <div className="feature-icon users mb-3">
              <i className="fas fa-users fs-4"></i>
            </div>
            <h5>Community Driven</h5>
            <p>
              Join thousands of users who share their perspectives and improve
              their skills together.
            </p>
          </div>
          <div className="col-md-4 feature-text">
            <div className="feature-icon progress mb-3">
              <i className="fas fa-chart-line fs-4"></i>
            </div>
            <h5>Track Progress</h5>
            <p>
              Monitor your improvement over time with detailed analytics and
              feedback history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
