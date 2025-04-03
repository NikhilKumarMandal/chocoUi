import React from 'react'

function Breadcrumb1() {
  return (
    <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-100 dark:text-gray-800">
	<ol className="flex h-8 space-x-2 dark:text-gray-800">
		<li className="flex items-center">
			<a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center hover:underline">Home</a>
		</li>
		<li className="flex items-center space-x-1">
			<span className="dark:text-gray-600">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
		</li>
		<li className="flex items-center space-x-1">
			<span className="dark:text-gray-600">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
		</li>
		<li className="flex items-center space-x-1">
			<span className="dark:text-gray-600">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
		</li>
	</ol>
</nav>
  )
}

export default Breadcrumb1