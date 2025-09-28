import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="relative max-w-md text-center px-8 py-12">
        {/* Floating geometric shapes for visual interest */}
        <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-16 -right-12 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-ping"></div>
        
        {/* Main content */}
        <div className="relative z-10">
          {/* 404 with gradient text */}
          <h1 className="mb-6 text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          
          {/* Error message */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Page Not Found
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, it happens to the best of us!
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="space-y-4">
            <a 
              href="/" 
              className="inline-block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 ease-in-out"
            >
              🏠 Take Me Home
            </a>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.history.back()} 
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                ← Go Back
              </button>
              
              <a 
                href="/contact" 
                className="px-6 py-2 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-200"
              >
                Report Issue
              </a>
            </div>
          </div>
          
          {/* Additional helpful info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Lost? Try checking the URL or use the navigation menu.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Error code: 404 • Path: <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;