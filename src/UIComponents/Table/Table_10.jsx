import React, { useState, useEffect } from "react";

const Table_10 = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("sales");
  const [sortDirection, setSortDirection] = useState("desc");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");

  const productsData = [
    {
      id: 1,
      name: "Product A",
      sku: "PRD-001",
      category: "Electronics",
      categoryColor: "bg-green-100 text-green-800",
      sales: 1234,
      revenue: 12340,
      growth: "+12%",
      growthColor: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "High-quality electronic product with advanced features.",
      stock: 450,
      lastUpdated: "2023-09-15",
    },
    {
      id: 2,
      name: "Product B",
      sku: "PRD-002",
      category: "Clothing",
      categoryColor: "bg-blue-100 text-blue-800",
      sales: 856,
      revenue: 8560,
      growth: "+8%",
      growthColor: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Comfortable and stylish clothing for everyday wear.",
      stock: 320,
      lastUpdated: "2023-09-18",
    },
    {
      id: 3,
      name: "Product C",
      sku: "PRD-003",
      category: "Accessories",
      categoryColor: "bg-purple-100 text-purple-800",
      sales: 432,
      revenue: 3880,
      growth: "-3%",
      growthColor: "text-red-600",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Essential accessories to complement your style.",
      stock: 180,
      lastUpdated: "2023-09-20",
    },
    {
      id: 4,
      name: "Product D",
      sku: "PRD-004",
      category: "Electronics",
      categoryColor: "bg-green-100 text-green-800",
      sales: 678,
      revenue: 6780,
      growth: "+15%",
      growthColor: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Cutting-edge electronic device with innovative features.",
      stock: 210,
      lastUpdated: "2023-09-22",
    },
    {
      id: 5,
      name: "Product E",
      sku: "PRD-005",
      category: "Clothing",
      categoryColor: "bg-blue-100 text-blue-800",
      sales: 543,
      revenue: 5430,
      growth: "-5%",
      growthColor: "text-red-600",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      description: "Trendy clothing items for fashion-conscious individuals.",
      stock: 150,
      lastUpdated: "2023-09-25",
    },
  ];

  const metricsData = {
    day: {
      totalSales: 24780,
      orders: 1234,
      customers: 892,
      avgOrder: 89.5,
      salesChange: "+12%",
      ordersChange: "+8%",
      customersChange: "-3%",
      avgOrderChange: "+5%",
    },
    week: {
      totalSales: 156780,
      orders: 8234,
      customers: 5892,
      avgOrder: 92.5,
      salesChange: "+15%",
      ordersChange: "+12%",
      customersChange: "+2%",
      avgOrderChange: "+7%",
    },
    month: {
      totalSales: 647780,
      orders: 32340,
      customers: 15892,
      avgOrder: 95.5,
      salesChange: "+18%",
      ordersChange: "+15%",
      customersChange: "+5%",
      avgOrderChange: "+9%",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredAndSortedProducts = () => {
    let result = [...productsData];

    if (filterCategory !== "all") {
      result = result.filter((product) => product.category === filterCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.sku.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    result.sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];

      if (sortColumn === "sales" || sortColumn === "revenue") {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }

      if (sortColumn === "growth") {
        aValue = Number(aValue.replace("%", ""));
        bValue = Number(bValue.replace("%", ""));
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return result;
  };

  const itemsPerPage = 3;
  const totalPages = Math.ceil(
    filteredAndSortedProducts().length / itemsPerPage
  );
  const paginatedProducts = filteredAndSortedProducts().slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    setCurrentPage(1); // Reset to first page when changing time range
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  const handleCloseDetails = () => {
    setShowProductDetails(false);
  };

  const handleExport = () => {
    setIsExporting(true);

    setTimeout(() => {
      alert(`Exporting ${filteredAndSortedProducts().length} products to CSV`);
      setIsExporting(false);
    }, 1500);
  };

  const handleFilterCategory = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const timeRangeOptions = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "Electronics", label: "Electronics" },
    { value: "Clothing", label: "Clothing" },
    { value: "Accessories", label: "Accessories" },
  ];

  const renderMobileCard = (product) => (
    <div
      className="bg-white p-4 rounded-lg shadow mb-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => handleProductClick(product)}
    >
      <div className="flex items-center mb-3">
        <div className="h-10 w-10 flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {product.name}
          </div>
          <div className="text-xs text-gray-500">SKU: {product.sku}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="text-xs text-gray-500">Category</div>
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.categoryColor}`}
          >
            {product.category}
          </span>
        </div>
        <div>
          <div className="text-xs text-gray-500">Sales</div>
          <div className="text-sm font-medium">
            {product.sales.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Revenue</div>
          <div className="text-sm font-medium">
            ${product.revenue.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Growth</div>
          <div className={`text-sm font-medium ${product.growthColor}`}>
            {product.growth}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProductDetails = () => {
    if (!showProductDetails || !selectedProduct) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedProduct.name}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseDetails}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">SKU</h3>
                  <p className="text-lg">{selectedProduct.sku}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Category
                  </h3>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${selectedProduct.categoryColor}`}
                  >
                    {selectedProduct.category}
                  </span>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Description
                  </h3>
                  <p className="text-gray-700">{selectedProduct.description}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Stock</h3>
                  <p className="text-lg">{selectedProduct.stock} units</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Last Updated
                  </h3>
                  <p className="text-gray-700">{selectedProduct.lastUpdated}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Sales</h3>
                <p className="text-xl font-bold">
                  {selectedProduct.sales.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                <p className="text-xl font-bold">
                  ${selectedProduct.revenue.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Growth</h3>
                <p
                  className={`text-xl font-bold ${selectedProduct.growthColor}`}
                >
                  {selectedProduct.growth}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Stock</h3>
                <p className="text-xl font-bold">{selectedProduct.stock}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={handleCloseDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Sales Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex rounded-md overflow-hidden border border-gray-200 w-full sm:w-auto">
            {timeRangeOptions.map((option) => (
              <button
                key={option.value}
                className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium transition-colors ${
                  timeRange === option.value
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
                onClick={() => handleTimeRangeChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <button
            className={`w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center ${isExporting ? "opacity-75 cursor-not-allowed" : ""}`}
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Exporting...
              </>
            ) : (
              "Export Report"
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            ${metricsData[timeRange].totalSales.toLocaleString()}
          </p>
          <p
            className={`text-sm ${metricsData[timeRange].salesChange.includes("+") ? "text-green-600" : "text-red-600"}`}
          >
            {metricsData[timeRange].salesChange} from last period
          </p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Orders</h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            {metricsData[timeRange].orders.toLocaleString()}
          </p>
          <p
            className={`text-sm ${metricsData[timeRange].ordersChange.includes("+") ? "text-green-600" : "text-red-600"}`}
          >
            {metricsData[timeRange].ordersChange} from last period
          </p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Customers</h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            {metricsData[timeRange].customers.toLocaleString()}
          </p>
          <p
            className={`text-sm ${metricsData[timeRange].customersChange.includes("+") ? "text-green-600" : "text-red-600"}`}
          >
            {metricsData[timeRange].customersChange} from last period
          </p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Average Order</h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            ${metricsData[timeRange].avgOrder.toLocaleString()}
          </p>
          <p
            className={`text-sm ${metricsData[timeRange].avgOrderChange.includes("+") ? "text-green-600" : "text-red-600"}`}
          >
            {metricsData[timeRange].avgOrderChange} from last period
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-lg font-medium text-gray-900">
              Sales by Product
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative w-full sm:w-48">
                <select
                  value={filterCategory}
                  onChange={(e) => handleFilterCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div className="p-4">
            {paginatedProducts.map((product) => renderMobileCard(product))}
          </div>
        ) : (
          /* Desktop Table View */
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center">
                      Product
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
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("category")}
                  >
                    <div className="flex items-center">
                      Category
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
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("sales")}
                  >
                    <div className="flex items-center">
                      Sales
                      {sortColumn === "sales" && (
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
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("revenue")}
                  >
                    <div className="flex items-center">
                      Revenue
                      {sortColumn === "revenue" && (
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
                    className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("growth")}
                  >
                    <div className="flex items-center">
                      Growth
                      {sortColumn === "growth" && (
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={product.image}
                            alt={product.name}
                          />
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
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.categoryColor}`}
                      >
                        {product.category}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {product.sales.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      ${product.revenue.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className={product.growthColor}>
                        {product.growth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="px-4 sm:px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(
                currentPage * itemsPerPage,
                filteredAndSortedProducts().length
              )}{" "}
              of {filteredAndSortedProducts().length} products
            </div>
            <div className="flex space-x-2">
              <button
                className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              >
                Previous
              </button>
              <button
                className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {renderProductDetails()}
    </div>
  );
};

export default Table_10;
