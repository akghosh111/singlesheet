import React, { useState } from 'react';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in with:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex flex-col">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">singlesheet</div>
        <div className="flex space-x-8">
          <a href="#features" className="text-white hover:text-purple-300">Features</a>
          <a href="#how-it-works" className="text-white hover:text-purple-300">How It Works</a>
          <a href="#pricing" className="text-white hover:text-purple-300">Pricing</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 w-full max-w-md">
          <h1 className="text-white text-4xl font-bold text-center mb-2">Sign in to your account</h1>
          <p className="text-gray-300 text-center mb-8">Or start your free trial today</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">Email address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-white">Password</label>
                <a href="#forgot" className="text-purple-400 hover:text-purple-300 text-sm">Forgot your password?</a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" className="ml-2 block text-gray-300">Remember me</label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded transition duration-200"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <a href="#signup" className="text-purple-400 hover:text-purple-300">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

