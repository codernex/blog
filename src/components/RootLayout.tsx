import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={`${inter.className} scrollbar h-screen scrollbar-hide`}>
      <header>
        <Navbar />
      </header>
      <section className="h-full scrollbar-hide">
        <Toaster />
        {children}
      </section>
    </div>
  );
};
export default RootLayout;
