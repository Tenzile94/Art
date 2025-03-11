import React from "react";
import Image from "next/image";
const BlackBanner = () => {
  return (
    <div className="bg-black py-6">
      <div className="container max-w-5xl mx-auto h-[500px]">
        <Image
          width={500}
          height={300}
          alt="Art"
          src="/images/black.webp"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlackBanner;
