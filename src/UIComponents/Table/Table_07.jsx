import React, { useState, useEffect } from "react";

const Table_07 = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    
    // Sample data
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Premium Widget",
        sku: "PRD-001",
        category: "Electronics",
        stock: 75,
        maxStock: 100,
        price: 299.99,
        status: "In Stock",
        details: "High-quality premium widget with advanced features.",
        lastUpdated: "September 20, 2023",
        supplier: "Tech Supplies Inc.",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
        categoryColor: "bg-purple-100 text-purple-800",
        statusColor: "bg-green-100 text-green-800",
        stockColor: "bg-green-600"
      },
      {
        id: 2,
        name: "Basic Widget",
        sku: "PRD-002",
        category: "Accessories",
        stock: 25,
        maxStock: 100,
        price: 149.99,
        status: "Low Stock",
        details: "Basic widget for everyday use.",
        lastUpdated: "September 18, 2023",
        supplier: "Basic Supplies Co.",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
        categoryColor: "bg-blue-100 text-blue-800",
        statusColor: "bg-yellow-100 text-yellow-800",
        stockColor: "bg-yellow-600"
      },
      {
        id: 3,
        name: "Pro Widget",
        sku: "PRD-003",
        category: "Electronics",
        stock: 0,
        maxStock: 100,
        price: 399.99,
        status: "Out of Stock",
        details: "Professional-grade widget for advanced users.",
        lastUpdated: "September 15, 2023",
        supplier: "Pro Tech Solutions",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
        categoryColor: "bg-purple-100 text-purple-800",
        statusColor: "bg-red-100 text-red-800",
        stockColor: "bg-red-600"
      },
      {
        id: 4,
        name: "Mini Widget",
        sku: "PRD-004",
        category: "Accessories",
        stock: 90,
        maxStock: 100,
        price: 79.99,
        status: "In Stock",
        details: "Compact widget for portable use.",
        lastUpdated: "September 22, 2023",
        supplier: "Mini Gadgets Ltd.",
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
        iconColor: "text-orange-600",
        bgColor: "bg-orange-100",
        categoryColor: "bg-blue-100 text-blue-800",
        statusColor: "bg-green-100 text-green-800",
        stockColor: "bg-green-600"
      }
    ]);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 768);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const toggleRow = (id) => {
      setExpandedRow(expandedRow === id ? null : id);
    };
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleAddProduct = () => {
      alert("Add Product functionality would be implemented here");
    };
  
    const handleEditProduct = (e, productId) => {
      e.stopPropagation();
      alert(`Edit product ID: ${productId}`);
    };
  
    const handleDeleteProduct = (e, productId) => {
      e.stopPropagation();
      if (window.confirm(`Are you sure you want to delete product ID: ${productId}?`)) {
        setProducts(products.filter(product => product.id !== productId));
      }
    };
  
    const toggleSort = (column) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    };
  
    // Filter and sort products
    const filteredAndSortedProducts = products
      .filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        let aValue = a[sortColumn];
        let bValue = b[sortColumn];
        
        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
  
    const renderMobileCard = (product) => (
      <div 
        className="bg-white p-4 rounded-lg shadow mb-4 border border-gray-200"
        onClick={() => toggleRow(product.id)}
      >
        <div className="flex items-center mb-3">
          <div className={`h-10 w-10 rounded-md ${product.bgColor} flex items-center justify-center`}>
            <svg className={`h-6 w-6 ${product.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={product.icon} />
            </svg>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{product.name}</div>
            <div className="text-sm text-gray-500">SKU: {product.sku}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <div className="text-xs text-gray-500">Category</div>
            <div className="mt-1">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.categoryColor}`}>
                {product.category}
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Stock</div>
            <div className="flex items-center mt-1">
              <div className="w-16 bg-gray-200 rounded-full h-2.5">
                <div className={`${product.stockColor} h-2.5 rounded-full`} style={{ width: `${(product.stock / product.maxStock) * 100}%` }}></div>
              </div>
              <span className="ml-2 text-sm text-gray-500">{product.stock}/{product.maxStock}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Price</div>
            <div className="text-sm text-gray-900 mt-1">${product.price.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Status</div>
            <div className="mt-1">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.statusColor}`}>
                {product.status}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-end">
          <button 
            className="text-blue-600 hover:text-blue-900 mr-3"
            onClick={(e) => handleEditProduct(e, product.id)}
          >
            Edit
          </button>
          <button 
            className="text-red-600 hover:text-red-900"
            onClick={(e) => handleDeleteProduct(e, product.id)}
          >
            Delete
          </button>
        </div>
        
        {expandedRow === product.id && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Product Details</h4>
                <p className="mt-1 text-sm text-gray-500">{product.details}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Last Updated</h4>
                <p className="mt-1 text-sm text-gray-500">{product.lastUpdated}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Supplier</h4>
                <p className="mt-1 text-sm text-gray-500">{product.supplier}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  
    return (
      <div className="container p-4 sm:p-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-800">Product Inventory</h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <svg
                    className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <button 
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
  
          {isMobileView ? (
            <div className="p-4">
              {filteredAndSortedProducts.map(product => renderMobileCard(product))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                      onClick={() => toggleSort("name")}
                    >
                      <div className="flex items-center">
                        <span>Product</span>
                        {sortColumn === "name" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                      onClick={() => toggleSort("category")}
                    >
                      <div className="flex items-center">
                        <span>Category</span>
                        {sortColumn === "category" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                      onClick={() => toggleSort("stock")}
                    >
                      <div className="flex items-center">
                        <span>Stock</span>
                        {sortColumn === "stock" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                      onClick={() => toggleSort("price")}
                    >
                      <div className="flex items-center">
                        <span>Price</span>
                        {sortColumn === "price" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600"
                      onClick={() => toggleSort("status")}
                    >
                      <div className="flex items-center">
                        <span>Status</span>
                        {sortColumn === "status" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAndSortedProducts.map(product => (
                    <React.Fragment key={product.id}>
                      <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => toggleRow(product.id)}>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`h-10 w-10 rounded-md ${product.bgColor} flex items-center justify-center`}>
                              <svg className={`h-6 w-6 ${product.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={product.icon} />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">SKU: {product.sku}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.categoryColor}`}>
                            {product.category}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2.5">
                              <div className={`${product.stockColor} h-2.5 rounded-full`} style={{ width: `${(product.stock / product.maxStock) * 100}%` }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-500">{product.stock}/{product.maxStock}</span>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.price.toFixed(2)}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.statusColor}`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button 
                            className="text-blue-600 hover:text-blue-900 mr-3"
                            onClick={(e) => handleEditProduct(e, product.id)}
                          >
                            Edit
                          </button>
                          <button 
                            className="text-red-600 hover:text-red-900"
                            onClick={(e) => handleDeleteProduct(e, product.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      {expandedRow === product.id && (
                        <tr>
                          <td colSpan="6" className="px-4 sm:px-6 py-4 bg-gray-50">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">Product Details</h4>
                                <p className="mt-1 text-sm text-gray-500">{product.details}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">Last Updated</h4>
                                <p className="mt-1 text-sm text-gray-500">{product.lastUpdated}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">Supplier</h4>
                                <p className="mt-1 text-sm text-gray-500">{product.supplier}</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
  
          <div className="px-4 sm:px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                Showing {filteredAndSortedProducts.length} of {products.length} products
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Table_07