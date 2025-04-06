import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <section className="text-center mt-24 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to Your MERN Stack CRUD App!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Build, Read, Update, and Delete data with secure authentication.
        </p>
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">
              Let's Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-3 bg-gray-200 text-blue-700 rounded-full font-semibold hover:bg-gray-300">
              Create Account
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
