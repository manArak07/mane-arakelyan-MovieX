import React from "react";
import Footer from "./footer";
import Header from "./header";

function Layout(props) {
  return (
    <div className=" min-h-screen relative">
      <Header />
      <main className="w-full">
        <div className="mt-8 w-full flex flex-col items-center justify-center">
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
