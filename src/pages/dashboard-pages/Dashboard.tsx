import React from "react";
import Layout from "../../components/dashboard/Layout";

const Dashboard: React.FC = () => {
  return (
    <>
      <Layout>
        <section className="h-full p-4 bg-[#fff] rounded-lg">
          <p className="font-semibold text-base text-[#333]">
            Hi, <span className="text-[#f3cfa0]">Alex!</span> Ready to make
            someone’s day special?
          </p>
          <button className="bg-[#f3cfa0] h-7 w-24 m-9"></button>
        </section>
      </Layout>
    </>
  );
};

export default Dashboard;
