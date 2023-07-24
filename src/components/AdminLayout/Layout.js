import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-72 min-h-screen bg-light">
        <Header sidebarOpe={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
