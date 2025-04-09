import React, { useState, useEffect } from "react";

const Table_06 = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: "ORD-2023-001",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      date: "Sep 15, 2023",
      amount: 1299.0,
      paymentMethod: "Credit Card",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        initials: "JD",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
    },
    {
      id: 2,
      orderNumber: "ORD-2023-002",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-800",
      date: "Sep 18, 2023",
      amount: 899.0,
      paymentMethod: "PayPal",
      customer: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        initials: "JS",
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
      },
    },
    {
      id: 3,
      orderNumber: "ORD-2023-003",
      status: "Shipped",
      statusColor: "bg-blue-100 text-blue-800",
      date: "Sep 20, 2023",
      amount: 149.0,
      paymentMethod: "Credit Card",
      customer: {
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        initials: "BJ",
        bgColor: "bg-green-100",
        textColor: "text-green-600",
      },
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isTabletView, setIsTabletView] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1024
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      setIsTabletView(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".filter-container")) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handleExport = () => {
    alert("Export functionality would be implemented here");
  };

  const handleViewOrder = (orderId) => {
    alert(`View order ID: ${orderId}`);
  };

  const handleEditOrder = (e, orderId) => {
    e.stopPropagation();
    alert(`Edit order ID: ${orderId}`);
  };

  const handleDeleteOrder = (e, orderId) => {
    e.stopPropagation();
    if (
      window.confirm(`Are you sure you want to delete order ID: ${orderId}?`)
    ) {
      setOrders(orders.filter((order) => order.id !== orderId));
    }
  };

  const handleFilterClick = (e) => {
    e.stopPropagation();
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterOptionClick = (status) => {
    setFilterStatus(status);
    setIsFilterOpen(false);
  };

  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "all" ||
      order.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container p-2 sm:p-4 md:p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Customer Orders
        </h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
          <div className="flex gap-2">
            <button
              className="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base"
              onClick={handleExport}
            >
              Export
            </button>
            <div className="relative filter-container">
              <button
                className="px-3 sm:px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm sm:text-base"
                onClick={handleFilterClick}
              >
                Filter
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-1">
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${filterStatus === "all" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-100"}`}
                      onClick={() => handleFilterOptionClick("all")}
                    >
                      All Orders
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${filterStatus === "completed" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-100"}`}
                      onClick={() => handleFilterOptionClick("completed")}
                    >
                      Completed
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${filterStatus === "processing" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-100"}`}
                      onClick={() => handleFilterOptionClick("processing")}
                    >
                      Processing
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm ${filterStatus === "shipped" ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-100"}`}
                      onClick={() => handleFilterOptionClick("shipped")}
                    >
                      Shipped
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet View (Card Layout) */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:hidden">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleViewOrder(order.id)}
          >
            <div className="p-3 sm:p-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full ${order.customer.bgColor} flex items-center justify-center ${order.customer.textColor} text-xs font-medium`}
                    >
                      {order.customer.initials}
                    </div>
                    <div className="ml-2 sm:ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {order.customer.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {order.customer.email}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        Order #{order.orderNumber}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Placed on {order.date}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900">
                        ${order.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        Paid via {order.paymentMethod}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 sm:mt-3 border-t border-gray-100 pt-2 sm:pt-3">
                  <div className="flex justify-end space-x-2">
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => handleViewOrder(order.id)}
                    >
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => handleEditOrder(e, order.id)}
                    >
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => handleDeleteOrder(e, order.id)}
                    >
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View (Table Layout) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleViewOrder(order.id)}
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {order.orderNumber}
                  </div>
                  <div className="text-xs text-gray-500">
                    {order.paymentMethod}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  ${order.amount.toFixed(2)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div
                      className={`h-8 w-8 rounded-full ${order.customer.bgColor} flex items-center justify-center ${order.customer.textColor} text-xs font-medium`}
                    >
                      {order.customer.initials}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        {order.customer.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.customer.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => handleViewOrder(order.id)}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => handleEditOrder(e, order.id)}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={(e) => handleDeleteOrder(e, order.id)}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-xs sm:text-sm text-gray-500">
          Showing {filteredOrders.length} of {orders.length} orders
        </div>
        <div className="flex space-x-2">
          <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table_06;
