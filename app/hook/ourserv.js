export default function Services() {
  const service = [
    {
      image: "/images/comm.png",
      title: "Market Positioning & Communication Strategy",
      descrition:
        "Before any post or campaign, we ask: What’s the real business goal? We help you define your brand’s voice, story, and positioning — so you become trusted, clear, and unavoidable in your space.",
      point1: "Brand identity & audience strategy",
      point2: "Communication frameworks that scale",
      point3: "Campaign planning aligned with business goals",
      point4: "Strategic clarity before any execution",
    },
    {
      image: "/images/brand.png",
      title: "Brand-Led Content Systems",
      descrition:
        "Content isn't about trends — it’s about building trust at scale.We design and deliver a content system that builds authority, earns loyalty, and grows your brand week after week.",
      point1: "Long-term brand storytelling (not just viral trends)",
      point2: "Multi-format content (video, visuals, voice)",
      point3: "Built to educate, convert, and retain",
      point4: "Culturally aware, locally fluent narratives",
    },
    {
      image: "/images/market.png",
      title: "Performance Marketing for Growth",
      descrition:
        "Your offer deserves real attention — and real returns.We run high-conversion campaigns across platforms, focused on sales, leads, bookings, and growth.",
      point1: "Conversion-first campaign design",
      point2: "Smart audience segmentation",
      point3: "Funnel setup: awareness → action",
      point4: "Real-time reporting on what moves the bottom linen",
    },
  ];
  return (
    <div className="pt-[50px]">
      <div className="flex flex-col items-center">
        <p className="md:text-[60px] text-[40px] text-teal-950 font-extrabold text-center">
          OUR SERVICES
        </p>
        <div className="w-[20%] border-b-4 border-orange-800 m-1"></div>
      </div>
      <p className="text-center opacity-90 text-teal-950 px-[30px] md:px-[20%]">
        Marketing That Moves the Business — Not Just the Metrics We don’t sell
        posts, videos, or ads. We solve business problems through brand
        communication, strategy, and execution that work in Ethiopia.
      </p>
      <div className=" grid grid-cols-1  md:grid-cols-3 gap-x-[20px] px-[10px] gap-y-[20px] md:gap-y-0 md:px-[100px] mb-[50px] mt-[30px]">
        {service.map((item, index) => (
          <ul
            key={index}
            className=" bg-white text-teal-950 p-[20px] shadow-2xl shadow-gray-500 rounded-3xl group"
          >
            <div className=" bg-gray-200 rounded-[50%] w-[60px] h-[60px] flex justify-center items-center transition-transform duration-300 group-hover:rotate-[60deg] group-hover:bg-amber-700">
              <img src={item.image} className="h-[30px] w-[30px]" />
            </div>
            <p className="font-bold text-[20px]">{item.title}</p>
            <p className="my-[10px]">{item.descrition}</p>
            <li className="transition-transform hover:translate-x-[5px] opacity-70 hover:opacity-100 p-[10px]">
              <span className="text-yellow-700">✔</span> {item.point1}
            </li>
            <li className="transition-transform hover:translate-x-[5px] opacity-70 hover:opacity-100 p-[10px]">
              <span className="text-yellow-700">✔</span> {item.point2}
            </li>
            <li className="transition-transform hover:translate-x-[5px] opacity-70 hover:opacity-100 p-[10px]">
              <span className="text-yellow-700">✔</span> {item.point3}
            </li>
            <li className="transition-transform hover:translate-x-[5px] opacity-70 hover:opacity-100 p-[10px]">
              <span className="text-yellow-700">✔</span> {item.point4}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
