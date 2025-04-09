import React, { useState, useEffect } from "react";

const Table_08 = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [sortColumn, setSortColumn] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    
    // Sample data
    const [users, setUsers] = useState([
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
        status: "Active",
        lastActive: "2 hours ago",
        details: "Full access to all system features and settings.",
        lastLogin: "September 20, 2023 at 10:30 AM",
        twoFactorAuth: "Enabled",
        initials: "JD",
        gradient: "from-cyan-500 to-blue-500"
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "Editor",
        status: "Away",
        lastActive: "1 day ago",
        details: "Can edit content but cannot modify system settings.",
        lastLogin: "September 19, 2023 at 3:45 PM",
        twoFactorAuth: "Disabled",
        initials: "JS",
        gradient: "from-pink-500 to-purple-500"
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        role: "Viewer",
        status: "Offline",
        lastActive: "3 days ago",
        details: "Can view content but cannot make any changes.",
        lastLogin: "September 17, 2023 at 9:15 AM",
        twoFactorAuth: "Enabled",
        initials: "BJ",
        gradient: "from-green-500 to-teal-500"
      },
      {
        id: 4,
        name: "Alice Williams",
        email: "alice.williams@example.com",
        role: "Editor",
        status: "Active",
        lastActive: "30 minutes ago",
        details: "Can edit content but cannot modify system settings.",
        lastLogin: "September 21, 2023 at 11:20 AM",
        twoFactorAuth: "Enabled",
        initials: "AW",
        gradient: "from-yellow-500 to-orange-500"
      }
    ]);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 768);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const toggleSort = (column) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    };
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleAddUser = () => {
      alert("Add User functionality would be implemented here");
    };
  
    const handleViewUser = (e, userId) => {
      e.stopPropagation();
      alert(`View details for user ID: ${userId}`);
    };
  
    const handleEditUser = (e, userId) => {
      e.stopPropagation();
      alert(`Edit user ID: ${userId}`);
    };
  
    const handleDeleteUser = (e, userId) => {
      e.stopPropagation();
      if (window.confirm(`Are you sure you want to delete user ID: ${userId}?`)) {
        setUsers(users.filter(user => user.id !== userId));
      }
    };
  
    // Filter and sort users
    const filteredAndSortedUsers = users
      .filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        let aValue = a[sortColumn];
        let bValue = b[sortColumn];
        
        // Handle special cases for sorting
        if (sortColumn === "lastActive") {
          // Convert time strings to comparable values
          const timeMap = {
            "just now": 0,
            "minutes ago": 1,
            "hours ago": 2,
            "days ago": 3,
            "weeks ago": 4,
            "months ago": 5
          };
          
          const aTimeUnit = aValue.split(" ")[1];
          const bTimeUnit = bValue.split(" ")[1];
          
          aValue = timeMap[aTimeUnit] || 6;
          bValue = timeMap[bTimeUnit] || 6;
        }
        
        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
  
    const renderMobileCard = (user) => (
      <div 
        className="bg-gray-800 p-4 rounded-lg shadow mb-4 border border-gray-700"
        onClick={() => setSelectedRow(selectedRow === user.id ? null : user.id)}
      >
        <div className="flex items-center mb-3">
          <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${user.gradient} flex items-center justify-center text-white font-medium`}>
            {user.initials}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-white">{user.name}</div>
            <div className="text-sm text-gray-400">{user.email}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <div className="text-xs text-gray-400">Role</div>
            <div className="mt-1">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                user.role === "Admin" ? "bg-purple-900 text-purple-300 border border-purple-700" : 
                user.role === "Editor" ? "bg-blue-900 text-blue-300 border border-blue-700" : 
                "bg-gray-800 text-gray-300 border border-gray-700"
              }`}>
                {user.role}
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Status</div>
            <div className="mt-1">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                user.status === "Active" ? "bg-green-900 text-green-300 border border-green-700" : 
                user.status === "Away" ? "bg-yellow-900 text-yellow-300 border border-yellow-700" : 
                "bg-red-900 text-red-300 border border-red-700"
              }`}>
                {user.status}
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Last Active</div>
            <div className="text-sm text-gray-300 mt-1">{user.lastActive}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Actions</div>
            <div className="flex space-x-2 mt-1">
              <button 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                onClick={(e) => handleViewUser(e, user.id)}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                onClick={(e) => handleEditUser(e, user.id)}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                className="text-red-400 hover:text-red-300 transition-colors"
                onClick={(e) => handleDeleteUser(e, user.id)}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {selectedRow === user.id && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h4 className="text-sm font-medium text-cyan-400">User Details</h4>
                <p className="mt-1 text-sm text-gray-300">{user.details}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-cyan-400">Last Login</h4>
                <p className="mt-1 text-sm text-gray-300">{user.lastLogin}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-cyan-400">Two-Factor Auth</h4>
                <p className="mt-1 text-sm text-gray-300">{user.twoFactorAuth}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  
    return (
      <div className="container p-4 sm:p-6 max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold text-white">User Management</h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                  className="w-full sm:w-auto px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/20"
                  onClick={handleAddUser}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
  
          {isMobileView ? (
            <div className="p-4">
              {filteredAndSortedUsers.map(user => renderMobileCard(user))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-cyan-400"
                      onClick={() => toggleSort("name")}
                    >
                      <div className="flex items-center">
                        <span>User</span>
                        {sortColumn === "name" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-cyan-400"
                      onClick={() => toggleSort("role")}
                    >
                      <div className="flex items-center">
                        <span>Role</span>
                        {sortColumn === "role" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-cyan-400"
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
                    <th 
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-cyan-400"
                      onClick={() => toggleSort("lastActive")}
                    >
                      <div className="flex items-center">
                        <span>Last Active</span>
                        {sortColumn === "lastActive" && (
                          <svg className={`ml-1 h-4 w-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                  {filteredAndSortedUsers.map(user => (
                    <React.Fragment key={user.id}>
                      <tr 
                        className={`hover:bg-gray-800 cursor-pointer transition-colors ${selectedRow === user.id ? 'bg-gray-800' : ''}`}
                        onClick={() => setSelectedRow(selectedRow === user.id ? null : user.id)}
                      >
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${user.gradient} flex items-center justify-center text-white font-medium`}>
                              {user.initials}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">{user.name}</div>
                              <div className="text-sm text-gray-400">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.role === "Admin" ? "bg-purple-900 text-purple-300 border border-purple-700" : 
                            user.role === "Editor" ? "bg-blue-900 text-blue-300 border border-blue-700" : 
                            "bg-gray-800 text-gray-300 border border-gray-700"
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === "Active" ? "bg-green-900 text-green-300 border border-green-700" : 
                            user.status === "Away" ? "bg-yellow-900 text-yellow-300 border border-yellow-700" : 
                            "bg-red-900 text-red-300 border border-red-700"
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {user.lastActive}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          <div className="flex space-x-2">
                            <button 
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                              onClick={(e) => handleViewUser(e, user.id)}
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button 
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                              onClick={(e) => handleEditUser(e, user.id)}
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button 
                              className="text-red-400 hover:text-red-300 transition-colors"
                              onClick={(e) => handleDeleteUser(e, user.id)}
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {selectedRow === user.id && (
                        <tr>
                          <td colSpan="5" className="px-4 sm:px-6 py-4 bg-gray-800 border-t border-gray-700">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-cyan-400">User Details</h4>
                                <p className="mt-1 text-sm text-gray-300">{user.details}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-cyan-400">Last Login</h4>
                                <p className="mt-1 text-sm text-gray-300">{user.lastLogin}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-cyan-400">Two-Factor Auth</h4>
                                <p className="mt-1 text-sm text-gray-300">{user.twoFactorAuth}</p>
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
  
          <div className="px-4 sm:px-6 py-4 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">
                Showing {filteredAndSortedUsers.length} of {users.length} users
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-700 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-700 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Table_08