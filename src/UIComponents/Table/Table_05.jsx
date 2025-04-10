import React, { useState, useEffect } from "react";

const Table_05 = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop Pro",
      sku: "LP-2023-001",
      category: "Electronics",
      price: 1299.0,
      stock: 42,
      status: "In Stock",
      statusColor: "bg-green-100 text-green-800",
      iconColor: "bg-blue-100 text-blue-600",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      name: "Smartphone X",
      sku: "SP-2023-002",
      category: "Electronics",
      price: 899.0,
      stock: 15,
      status: "Low Stock",
      statusColor: "bg-yellow-100 text-yellow-800",
      iconColor: "bg-purple-100 text-purple-600",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      sku: "WE-2023-003",
      category: "Audio",
      price: 149.0,
      stock: 0,
      status: "Out of Stock",
      statusColor: "bg-red-100 text-red-800",
      iconColor: "bg-green-100 text-green-600",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
      ),
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
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
    if (
      window.confirm(
        `Are you sure you want to delete product ID: ${productId}?`
      )
    ) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  // Filter and sort products
  const filteredAndSortedProducts = products
    .filter(
      (product) =>
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
    <div className="bg-white p-4 rounded-lg shadow mb-4 border border-gray-200">
      <div className="flex items-center mb-3">
        <div
          className={`h-10 w-10 rounded-md ${product.iconColor} flex items-center justify-center`}
        >
          {product.icon}
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {product.name}
          </div>
          <div className="text-sm text-gray-500">SKU: {product.sku}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <div>
          <div className="text-xs text-gray-500">Category</div>
          <div className="text-sm text-gray-900 mt-1">{product.category}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Price</div>
          <div className="text-sm text-gray-900 mt-1">
            ${product.price.toFixed(2)}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Stock</div>
          <div className="text-sm text-gray-900 mt-1">{product.stock}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Status</div>
          <div className="mt-1">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.statusColor}`}
            >
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
    </div>
  );

  return (
    <div className="container p-4 sm:p-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Product Inventory
        </h2>
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

      {isMobileView ? (
        <div>
          {filteredAndSortedProducts.map((product) =>
            renderMobileCard(product)
          )}
        </div>
      ) : (
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("name")}
                >
                  <div className="flex items-center">
                    <span>Product</span>
                    {sortColumn === "name" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("category")}
                >
                  <div className="flex items-center">
                    <span>Category</span>
                    {sortColumn === "category" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("price")}
                >
                  <div className="flex items-center">
                    <span>Price</span>
                    {sortColumn === "price" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("stock")}
                >
                  <div className="flex items-center">
                    <span>Stock</span>
                    {sortColumn === "stock" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 cursor-pointer hover:text-blue-600"
                  onClick={() => toggleSort("status")}
                >
                  <div className="flex items-center">
                    <span>Status</span>
                    {sortColumn === "status" && (
                      <svg
                        className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-100">
                    <div className="flex items-center">
                      <div
                        className={`h-10 w-10 rounded-md ${product.iconColor} flex items-center justify-center`}
                      >
                        {product.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          SKU: {product.sku}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-100">
                    {product.category}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-gray-100">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-100">
                    {product.stock}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-100">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.statusColor}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-100">
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
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          Showing {filteredAndSortedProducts.length} of {products.length}{" "}
          products
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
  );
};

export default Table_05;
