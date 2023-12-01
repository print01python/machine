import React from "react";
import Layout from "./Layout";

function Main() {
  return (
    <>
      <Layout>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-2xl font-gilroy-black dark:text-dark-txt text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Inteligencia Artificial con Python
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 font-gilroy-regular">
              Algoritmos de machine learning y deep learning con ejemplos.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Main;
