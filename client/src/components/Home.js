import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

  return (
    <div className="home-container">
      <section className="home-content">
        <h2 className="home-title">
          🚀 Welcome to Your MERN Stack CRUD App!
        </h2>
        <p className="home-description">
          Build, Read, Update, and Delete data with secure authentication.
        </p>
        <div className="button-group">
          <Link to="/login">
            <button className="btn login-btn">
              🔐 Let’s Login
            </button>
          </Link>
          <Link to="/register">
            <button className="btn register-btn">
              ✨ Create Account
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
