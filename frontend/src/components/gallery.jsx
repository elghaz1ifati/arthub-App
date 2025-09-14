// import "../css/gallery.css";
export default function Gallery() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h2
            className="h3 fw-bold text-center mb-5"
            style={{ fontFamily: "Karla" }}
          >
            Featured Pictures
          </h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card gallery-item shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79262288-688f-4f9d-af8f-0b517d7c74d1.png"
                    className="card-img-top"
                    alt="Mountain"
                  />
                  <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2 shadow-sm">
                    <i className="fas fa-heart text-danger"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="fw-semibold">Mountain Majesty</h5>
                  <p className="text-muted">
                    Breathtaking view of the Swiss Alps captured at sunrise.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-2">
                      <button className="like-btn btn btn-sm btn-outline-success">
                        <i className="fas fa-thumbs-up"></i> Like
                      </button>
                      <button className="dislike-btn btn btn-sm btn-outline-danger">
                        <i className="fas fa-thumbs-down"></i> Dislike
                      </button>
                    </div>
                    <span className="text-warning">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                  </div>

                  <div className="comment-section">
                    <h6 className="fw-semibold mb-2">Comments (3)</h6>
                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="bg-light p-2 rounded">
                        "Absolutely stunning composition!"
                      </div>
                      <div className="bg-light p-2 rounded">
                        "The lighting is perfect in this shot."
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add a comment..."
                      />
                      <button className="btn btn-primary">Post</button>
                    </div>
                  </div>

                  <button className="btn btn-light w-100 mt-3 show-comments">
                    Comments
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card gallery-item shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79262288-688f-4f9d-af8f-0b517d7c74d1.png"
                    className="card-img-top"
                    alt="Mountain"
                  />
                  <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2 shadow-sm">
                    <i className="fas fa-heart text-danger"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="fw-semibold">Mountain Majesty</h5>
                  <p className="text-muted">
                    Breathtaking view of the Swiss Alps captured at sunrise.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-2">
                      <button className="like-btn btn btn-sm btn-outline-success">
                        <i className="fas fa-thumbs-up"></i> Like
                      </button>
                      <button className="dislike-btn btn btn-sm btn-outline-danger">
                        <i className="fas fa-thumbs-down"></i> Dislike
                      </button>
                    </div>
                    <span className="text-warning">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                  </div>

                  <div className="comment-section">
                    <h6 className="fw-semibold mb-2">Comments (3)</h6>
                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="bg-light p-2 rounded">
                        "Absolutely stunning composition!"
                      </div>
                      <div className="bg-light p-2 rounded">
                        "The lighting is perfect in this shot."
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add a comment..."
                      />
                      <button className="btn btn-primary">Post</button>
                    </div>
                  </div>

                  <button className="btn btn-light w-100 mt-3 show-comments">
                    Comments
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card gallery-item shadow-sm">
                <div className="position-relative">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79262288-688f-4f9d-af8f-0b517d7c74d1.png"
                    className="card-img-top"
                    alt="Mountain"
                  />
                  <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2 shadow-sm">
                    <i className="fas fa-heart text-danger"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="fw-semibold">Mountain Majesty</h5>
                  <p className="text-muted">
                    Breathtaking view of the Swiss Alps captured at sunrise.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-2">
                      <button className="like-btn btn btn-sm btn-outline-success">
                        <i className="fas fa-thumbs-up"></i> Like
                      </button>
                      <button className="dislike-btn btn btn-sm btn-outline-danger">
                        <i className="fas fa-thumbs-down"></i> Dislike
                      </button>
                    </div>
                    <span className="text-warning">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                  </div>

                  <div className="comment-section">
                    <h6 className="fw-semibold mb-2">Comments (3)</h6>
                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="bg-light p-2 rounded">
                        "Absolutely stunning composition!"
                      </div>
                      <div className="bg-light p-2 rounded">
                        "The lighting is perfect in this shot."
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add a comment..."
                      />
                      <button className="btn btn-primary">Post</button>
                    </div>
                  </div>

                  <button className="btn btn-light w-100 mt-3 show-comments">
                    Comments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
