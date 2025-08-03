"use client";
import { useState, useEffect, useRef } from "react";

export default function Ourwork({ SetDisplay }) {
  const [media, setMedia] = useState([]);
  const [butt, setButt] = useState(0);
  const [activeItemId, setActiveItemId] = useState(null); // for mobile tap hover
  const videoRefs = useRef({}); // Store refs per video

  useEffect(() => {
    async function fetchMedia() {
      const res = await fetch("/api");
      const data = await res.json();
      setMedia(data);
    }
    fetchMedia();
  }, []);

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const filteredMedia = media.filter((item) => {
    if (butt === 0) return true;
    if (butt === 1) return item.resource_type === "video";
    if (butt === 2) return item.resource_type === "image";
  });

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center">
        <p className="md:text-[60px] text-[35px] text-teal-950 font-extrabold text-center">
          OUR WORK
        </p>
        <div className="w-[20%] border-b-4 border-orange-800 m-1"></div>
      </div>
      <p className="text-center opacity-90 text-teal-950 px-[30px] md:px-[20%]">
        Impactful digital campaigns that drive real results
      </p>
      <div className="flex justify-center gap-4 my-4">
        {["All", "Video", "Image"].map((label, i) => (
          <button
            key={label}
            onClick={() => setButt(i)}
            className={`md:p-[10px_20px] p-[5px_10px] text-[17px] md:text-[20px] font-bold rounded-3xl ${
              butt === i ? "bg-amber-800 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="p-3 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredMedia.map((item) => {
          const title =
            item.context?.custom?.alt || item.public_id || "Untitled";

          return (
            <div
              key={item.asset_id}
              className="border rounded-[10px] shadow shadow-gray-600"
              onClick={() =>
                setActiveItemId((prev) =>
                  prev === item.asset_id ? null : item.asset_id
                )
              }
            >
              {item.resource_type === "video" ? (
                <div className="group relative cursor-pointer">
                  <video
                    ref={(el) => (videoRefs.current[item.asset_id] = el)}
                    muted
                    loop
                    playsInline
                    className="w-full h-[300px] object-cover rounded"
                  >
                    <source src={item.secure_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 h-full w-full z-10 pl-[20px] ${
                      activeItemId === item.asset_id ? "flex" : "hidden"
                    } group-hover:flex bg-black/60`}
                  >
                    <div className="flex flex-col mt-[40%] gap-y-[10px]">
                      <p className="text-orange-600 text-center font-extrabold">
                        video production
                      </p>
                      <p className="text-white text-center font-extrabold">
                        {title}
                      </p>
                      <ul className="flex gap-x-[10px]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            SetDisplay(true);
                          }}
                          className="bg-gray-100 rounded-2xl p-[15px] hover:bg-amber-700"
                        >
                          <img
                            src="/logos/vfull.png"
                            className="w-[20px] h-[20px]"
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlay(item.asset_id);
                          }}
                          className="bg-gray-100 rounded-2xl p-[15px] hover:bg-amber-700"
                        >
                          <img
                            src="/logos/play.png"
                            className="w-[20px] h-[20px]"
                          />
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="group relative cursor-pointer">
                  <img
                    src={item.secure_url}
                    alt={title}
                    className="w-full h-[300px] object-cover rounded"
                  />
                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 h-full w-full z-10 pl-[20px] ${
                      activeItemId === item.asset_id ? "flex" : "hidden"
                    } group-hover:flex bg-black/60`}
                  >
                    <div className="flex flex-col mt-[40%] gap-y-[10px]">
                      <p className="text-orange-600 text-center font-extrabold">
                        Graphic Designs
                      </p>
                      <p className="text-white text-[20px] text-center font-extrabold">
                        {title}
                      </p>
                      <ul className="flex gap-x-[10px]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            SetDisplay(true);
                          }}
                          className="bg-gray-100 rounded-2xl p-[15px] hover:bg-amber-700"
                        >
                          <img
                            src="/logos/vfull.png"
                            className="w-[20px] h-[20px]"
                          />
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
