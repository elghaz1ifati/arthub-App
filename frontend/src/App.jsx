import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Features from "./components/features";
import Footer from "./components/footer";
import AuthForm from "./components/authForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Gallery />
              <Features />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
