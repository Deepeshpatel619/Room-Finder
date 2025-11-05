import {React,useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LandingPage() { 
 const { user} = useContext(AuthContext);
  return (
    <div>
      {/* ✅ Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">🏠 Find Your Perfect Room</h1>
          <p className="lead">
            Easy, fast and reliable room rental platform for students, families
            & professionals.
          </p>
          <div className="mt-4">
            <Link to="/nearbyrooms" className="btn btn-light btn-lg me-3">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ✅ Features Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3">
                <h3>🔍 Easy Search</h3>
                <p>Find rooms quickly with map-based search and filters.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3">
                <h3>📍 Location Based</h3>
                <p>Discover nearby rooms based on your location.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3">
                <h3>👥 Preferences</h3>
                <p>Choose from Boys, Girls, Family, or Anyone categories.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm border-0 p-3">
                <h3>💰 Affordable</h3>
                <p>Get the best rooms at pocket-friendly prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h2 className="fw-bold">Have a room to share?</h2>
          <p className="mb-4">
            Post your room and connect with the right people quickly.
          </p>
          {user?(<Link to="/dashboard" className="btn btn-light btn-lg">
            Post a Room
          </Link>):(<Link to="/login" className="btn btn-light btn-lg">
            Post a Room
          </Link>)}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} RoomFinder | Made with ❤️
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
