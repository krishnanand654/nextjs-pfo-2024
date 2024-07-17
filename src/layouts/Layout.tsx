// Layout.js or Layout.jsx
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="layout">{children}</div>;
}

export default Layout;
