import { useState } from 'react';

const Banners2 = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsVisible(false), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-opacity duration-300">
       
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 
                     transition-colors duration-200"
          aria-label="Close banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-6 py-8">
          {!isSubscribed ? (
            <div>
             
              <div className="text-center mb-6">
                <h3 className="text-gray-900 font-medium text-lg mb-2">
                  Stay updated with our newsletter
                </h3>
                <p className="text-gray-600 text-sm">
                  Get the latest updates and exclusive offers directly in your inbox
                </p>
              </div>

          
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-gray-500 
                               focus:border-transparent transition-all duration-200
                               placeholder-gray-400 text-gray-600"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg
                               hover:bg-gray-800 transition-colors duration-200
                               focus:outline-none focus:ring-2 focus:ring-gray-500 
                               focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 
                              rounded-full bg-gray-100">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-gray-900 font-medium text-lg mb-2">
                Thank you for subscribing!
              </h3>
              <p className="text-gray-600 text-sm">
                Check your email to confirm your subscription.
              </p>
            </div>
          )}
        </div>

     
        <div className="h-1 bg-gradient-to-r from-gray-900 to-gray-700" />
      </div>
    </div>
  );
};

export default Banners2;

