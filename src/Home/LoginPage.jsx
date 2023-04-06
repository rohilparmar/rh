import React, { useState } from 'react';

function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Handle showing/hiding of login popup
  function handleShowLogin() {
    setShowLogin(true);
    setShowSignup(false);
  }
  function handleCloseLogin() {
    setShowLogin(false);
  }

  // Handle showing/hiding of signup popup
  function handleShowSignup() {
    setShowSignup(true);
    setShowLogin(false);
  }
  function handleCloseSignup() {
    setShowSignup(false);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Login popup */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" for="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
                <button
                  className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                  type="button"
                  onClick={handleCloseLogin}
                >
                  Close
                </button>
              </div>
            </form>
            <p className="mt-4">
              Don't have an account?{' '}
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                type="button"
                onClick={handleShowSignup}
              >
                Sign up!
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Signup popup */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Sign up</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" for="confirmPassword">
                  Confirm password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign up
                </button>
                <button
                  className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                  type="button"
                  onClick={handleCloseSignup}
                >
                  Close
                </button>
              </div>
            </form>
            <p className="mt-4">
              Already have an account?{' '}
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                type="button"
                onClick={handleShowLogin}
              >
                Login!
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleShowLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
