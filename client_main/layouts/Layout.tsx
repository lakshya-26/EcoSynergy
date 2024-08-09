import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 py-10 overflow-hidden">{children}</div>
        <Footer />
    </div>
  )
}

export default Layout