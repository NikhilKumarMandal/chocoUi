import React, { useState } from 'react';

const Banner8 = () => {
    const [visibleBanners, setVisibleBanners] = useState({
        darkMode: true,
        locationAccess: true,
        referral: true,
        feedback: true
      });
    
      const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    
      const closeBanner = (bannerKey) => {
        setVisibleBanners(prev => ({
          ...prev,
          [bannerKey]: false
        }));
      };
    
      const toggleDarkMode = () => {
        setDarkModeEnabled(!darkModeEnabled);
      };
    
      return (
        <div className="space-y-6 p-6 max-w-5xl mx-auto">
          {visibleBanners.darkMode && (
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {darkModeEnabled ? (
                      <svg className="h-6 w-6 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">
                      {darkModeEnabled ? 'Dark Mode Enabled' : 'Try Dark Mode'}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {darkModeEnabled 
                        ? 'Dark mode is easier on your eyes at night.' 
                        : 'Dark mode reduces eye strain in low-light environments.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={toggleDarkMode}
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  >
                    <span className="sr-only">Toggle dark mode</span>
                    <span 
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        darkModeEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    ></span>
                  </button>
                  <button 
                    onClick={() => closeBanner('darkMode')} 
                    className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
    
          {visibleBanners.locationAccess && (
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white">Enable Location Services</h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        Allow access to your location to get personalized recommendations and nearby services.
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Your location data is only used when you're using the app and never shared with third parties.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-shrink-0 items-center space-x-3">
                    <button className="rounded-lg bg-red-600 dark:bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400">
                      Enable Location
                    </button>
                    <button 
                      onClick={() => closeBanner('locationAccess')} 
                      className="rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                    >
                      Not Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
    
          {visibleBanners.referral && (
            <div className="rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-0.5">
                <div className="bg-white dark:bg-gray-800 rounded-lg">
                  <div className="p-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 bg-gradient-to-br from-orange-400 to-pink-500 p-2 rounded-xl shadow-lg">
                          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-gray-900 dark:text-white">Refer a Friend, Get Rewards</h3>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            Invite friends to join and both of you will receive a $25 credit when they sign up.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-shrink-0 items-center space-x-3">
                        <button className="rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-2 text-sm font-medium text-white hover:from-orange-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
                          Share Invite
                        </button>
                        <button 
                          onClick={() => closeBanner('referral')} 
                          className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
    
          {visibleBanners.feedback && (
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-white text-center md:text-left">
                    <h3 className="text-xl font-bold">How are we doing?</h3>
                    <p className="mt-2 text-white/80 max-w-md">
                      Your feedback helps us improve. Take a moment to rate your experience with our platform.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button 
                        key={rating}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                      >
                        <span className="text-lg font-medium">{rating}</span>
                      </button>
                    ))}
                    <button 
                      onClick={() => closeBanner('feedback')} 
                      className="ml-2 rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}

export default Banner8