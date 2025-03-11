"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <h1 className="font-bold text-3xl text-center">MagyarTop</h1>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        <p className="text-md">© {new Date().getFullYear()} MagyarTop.com</p>
        <div className="text-left">
          <p className="text-lg">1234 Budapest, Példa utca 1.</p>
          <p className="text-lg">Email: info@MagyarTop.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
