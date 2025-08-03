"use client";
import { useState, useEffect } from "react";
import Navbar from "./hook/navbar";
import About from "./hook/about";
import Services from "./hook/ourserv";
import Contact from "./hook/contact";
import Footer from "./hook/footer";
import Ourwork from "./hook/ourwork";
export default function Home() {
  const [cli, Setcli] = useState(0);
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.jpg",
    "/logos/logo3.png",
    "/logos/logo4.jpg",
    "/logos/logo5.png",
    "/logos/logo6.jpg",
    "/logos/logo7.jpg",
    "/logos/logo8.jpg",
    "/logos/logo9.png",
    "/logos/logo10.jpg",
    "/logos/logo11.png",
    "/logos/logo12.jpg",
    "/logos/logo13.jpg",
    "/logos/logo14.jpg",
    "/logos/logo15.jpg",
  ];

  const visibleCount = 4;
  const [display, SetDisplay] = useState(false);
  const [position, setPosition] = useState(0);
  const totalSlides = logos.length;
  const [media, setMedia] = useState([]);
  const [current, setCurrent] = useState(0);
  const [activeLogo, setActiveLogo] = useState(null);

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

  // Extend logos for smooth looping
  const extendedLogos = [...logos, ...logos.slice(0, visibleCount)];
  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((prev) => (prev + 1) % (totalSlides + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [position]);

  const handleDotClick = (index) => {
    setPosition(index);
  };

  return (
    <div>
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
      <img
        src="/images/mapimage.png"
        alt="image-background"
        className="w-full h-[800px] absolute top-0 z-[-5]"
      />
      <div className=" flex flex-col md:flex-row items-center justify-around py-[20px] md:py-[180px]">
        <div className="flex flex-col gap-y-[20px] w-[80%] py-[80px] md:py-0 md:w-[50%]">
          <p className=" text-[90px] md:text-[90px] font-extrabold leading-none mb-[50px] md:mb-[50px]">
            Turning Clicks Into Clients
          </p>
          <p>We deliver +245% RIO through data & cultural story telling</p>
          <button className="bg-green-900 text-white px-[20px] py-[20px] w-[200px] rounded-md">
            Get Started
          </button>
        </div>
        <img
          src="/images/social.jpg"
          alt="digital"
          className="experience-float w-[450px] h-[400px] rounded-4xl md:block hidden"
        />
      </div>
      <About />
      <Services />
      <div className="bg-white pt-[50px]">
        <div className="flex flex-col items-center">
          <p className="md:text-[50px] text-[35px] text-teal-950 font-extrabold text-center">
            Why Clients Choose Think Digitals
          </p>
          <div className="w-[20%] border-b-4 border-orange-800 m-1"></div>
        </div>
        <div className="flex md:flex-row flex-col md:px-[100px] px-[10px] gap-[50px]">
          <img
            src="/images/whychoose.avif"
            className="w-[500px] h-[400px] md:h-[480px] rounded-3xl"
          />
          <div className="flex flex-col gap-y-[22px]">
            <p className="text-black text-[15px] md:text-[20px] text-justify">
              We deliver marketing that fuels real business growth — not just
              empty engagement. By communicating clearly and consistently, we
              build lasting trust between your brand and its audience. Every
              strategy and campaign we create is carefully tailored to
              Ethiopia’s unique culture and market needs. Our commitment is
              unwavering: we stay focused on results, adapting quickly and
              relentlessly until your brand not only meets but exceeds its
              goals.
            </p>
            <p className="text-blue-950 font-bold md:font-extrabold">
              ✅ We focus on real results — sales, leads, and growth.
            </p>
            <p className="text-blue-950 font-bold md:font-extrabold">
              ✅ We act fast, turning strategy into measurable action.
            </p>
            <p className="text-blue-950 font-bold md:font-extrabold">
              ✅ We fix and improve until it works for your business.
            </p>
            <p className="text-blue-950 font-bold md:font-extrabold">
              ✅ We build trust through consistent, clear communication.
            </p>
            <p className="text-blue-950 font-bold md:font-extrabold">
              ✅ We maintain clear communication at all times.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[50px]">
        <div className="flex flex-col items-center">
          <p className="md:text-[60px] text-[40px] text-teal-950 font-extrabold text-center">
            OUT CLIENTS
          </p>
          <div className="w-[20%] border-b-4 border-orange-800 m-1"></div>
        </div>
        <p className="text-center opacity-90 text-teal-950 px-[20%]">
          Trusted by industry-leading brands and partners
        </p>
      </div>
      <div className="py-10 text-center ">
        <div className="overflow-hidden w-full max-w-6xl mx-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(extendedLogos.length / visibleCount) * 100}%`,
              transform: `translateX(-${
                (position * 100) / extendedLogos.length
              }%)`,
            }}
          >
            {extendedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-4"
                style={{ width: `${100 / extendedLogos.length}%` }}
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  onClick={() => setActiveLogo(index)}
                  className={`mx-auto h-30 object-contain transition duration-300 ${
                    activeLogo === index ? "grayscale-0" : "grayscale"
                  } hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              onClick={() => handleDotClick(i)}
              className={`inline-block h-3 w-3 mx-1 rounded-full cursor-pointer ${
                i === position % totalSlides ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
      <Ourwork SetDisplay={SetDisplay} />
      <Contact />
      <Footer />
    </div>
  );
}
