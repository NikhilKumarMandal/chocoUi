import React from 'react'

const Skeleton_12 = () => {
    return (
        <div className="w-full max-w-3xl p-5 border rounded-lg shadow-sm animate-pulse bg-white mx-auto">
          <div className="h-48 w-full bg-gray-200 rounded-lg mb-4"></div>
          
          <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="mt-1 h-3 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex space-x-2">
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      );
}

export default Skeleton_12