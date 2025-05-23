import type { ReactNode } from "react";
import { useState } from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isNavbarOpen} />
      <Header
        toggleNavbar={() => setIsNavbarOpen(!isNavbarOpen)}
        isNavbarOpen={isNavbarOpen}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
