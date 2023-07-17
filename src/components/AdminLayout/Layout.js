import React, { useState } from "react";

import Sidebar from "./Sidebar";
// import Header from "./Header";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("sdsfdfsdfsf" , sidebarOpen)
  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className="lg:pl-72">
        {/* <Header sidebarOpe={sidebarOpen} setSidebarOpen={setSidebarOpen}/> */}
        <main className="py-10">
        {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
