import React, { ReactNode } from "react";

import Navbar from "../Navbar";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";
import ShoppingCart from "../ShoppingCart";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <ShoppingCart />
        <main>{children}</main>
        <h2>Footer</h2>
      </ShoppingCartProvider>
    </>
  );
};

export default Layout;
