import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="w-full flex bg-gray-200 text-black font-bold text-2xl h-screen">
        <section className="h-screen w-[20%] bg-[#fff]"></section>
        <section className="h-screen w-[80%]">
          <nav className="h-[8%] bg-[#FCAF58]"></nav>
          <section className="h-[92%] p-5">{children} </section>
        </section>
      </main>
    </>
  );
};

export default Layout;
