"use client";
import Link from "next/link";
import Footer from "../hook/footer";
import Navbar from "../hook/navbar";
import Ourwork from "../hook/ourwork";
import { useState, useEffect } from "react";

export default function Portfoliopage() {
  const [display, SetDisplay] = useState(false);
  const [media, setMedia] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchMedia() {
      const res = await fetch("/api");
      const data = await res.json();
      setMedia(data);
    }

    fetchMedia();
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + media.length) % media.length);
  };
  return (
    <div className="">
      {display && (
        <div className="fixed bg-black/90 w-full h-screen z-[1000] flex items-center justify-center">
          <span
            onClick={() => SetDisplay(false)}
            className="text-white absolute top-[30px] right-[30px] cursor-pointer text-[30px] font-bold z-[1001]"
          >
            X
          </span>
          {media.length > 0 && (
            <div className="relative w-full h-full flex items-center justify-center">
              {media[current].resource_type === "image" ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-4">
                  <img
                    src={media[current].secure_url}
                    alt={media[current].context?.custom?.alt || "Image"}
                    className="max-h-[90%] object-contain rounded-lg"
                  />
                  <p className="text-white text-center">
                    {media[current].context?.custom?.alt ||
                      media[current].public_id ||
                      "Untitled"}
                  </p>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-4">
                  <video
                    controls
                    className="max-h-[90%] object-contain rounded-lg"
                  >
                    <source src={media[current].secure_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="text-white text-center">
                    {media[current].context?.custom?.alt ||
                      media[current].public_id ||
                      "Untitled"}
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black px-4 py-2 rounded-full z-[1001]"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black px-4 py-2 rounded-full z-[1001]"
              >
                ▶
              </button>
            </div>
          )}
        </div>
      )}
      <Navbar />
      <img src="/images/background.jpg" className="h-[350px] w-full" />
      <div className="absolute top-[20%] left-[50%] transform -translate-x-[50%] text-white">
        <p className="font-extrabold text-[40px]">Portfolio</p>
        <p>
          <Link href="/" className="text-gray-300 cursor-pointer">
            Home
          </Link>{" "}
          / Portfolio
        </p>
      </div>
      <Ourwork SetDisplay={SetDisplay} />
      <Footer />
    </div>
  );
}
