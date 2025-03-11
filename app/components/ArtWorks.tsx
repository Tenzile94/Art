"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallary1.webp",
  "/images/gallary2.webp",
  "/images/gallary3.webp",
  "/images/gallary4.webp",
  "/images/gallary5.webp",
  "/images/gallary6.webp",
  "/images/gallary7.webp",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-fullmx-auto overflow-hidden my-16 bg-gray-50 py-6"
      id="artworks"
    >
      <h1 className="text-center italic text-4xl my-8">
        Leleplezni Az Ikonikus Kortárs Műalkotásokat
      </h1>

      <div className="relative  max-w-6xl mx-auto flex items-center justify-center w-full gap-4">
        {/* Previous Image (Half visible, blurred) */}
        <div className="w-1/5 transition-opacity duration-500 h-96 relative opacity-50">
          <Image
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
            width={400}
            height={300}
            className="object-cover  grayscale w-full h-full"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Current (Fully visible) */}
        <div className="w-3/5 transition-transform duration-500 h-96 relative">
          <Image
            src={images[currentIndex]}
            alt="Current"
            width={600}
            height={400}
            className="object-cover  shadow-lg w-full h-full"
          />
        </div>

        {/* Next Image (Half visible, blurred) */}
        <div className="w-1/5 transition-opacity duration-500 h-96 relative opacity-50">
          <Image
            src={images[(currentIndex + 1) % images.length]}
            alt="Next"
            width={400}
            height={300}
            className="object-cover  grayscale w-full h-full"
          />
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
