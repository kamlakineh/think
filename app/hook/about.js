export default function About() {
  return (
    <div className="flex md:flex-row flex-col md:gap-x-[100px] gap-y-[30px] px-[10px] md:px-[100px] py-[50px] bg-white">
      <div>
        <p className="md:text-[60px] text-[40px] font-extrabold leading-none text-teal-950">
          About Think Digitals
        </p>
        <p className="text-blue-950  md:text-[20px] text-justify text-[15px] font-serif my-[20px]">
          Think Digitals, based in Hawassa, is changing how marketing works in
          Ethiopia. We help brands connect better with people, grow their
          business, and build trust that lasts. We focus on three things: giving
          real value, creating content that truly matters, and earning trust.
          Using smart strategies, strong content, and targeted ads, we work with
          the right influencers to help your brand grow in a way that lasts.
          Think beyond posts. Think transformation. Think Digitals.
        </p>
        <div className="experience-float ml-[40%] bg-white shadow-2xl shadow-orange-500 flex items-center gap-x-[20px] p-[20px] rounded-4xl">
          <img src="/images/phone.png" className="h-[50px] w-[50px]" />
          <div className="flex flex-col gap-y-[5px] text-black">
            <p>call us anytime</p>
            <p className="font-bold">0911000000</p>
            <p className="font-bold">0911333333</p>
          </div>
        </div>
      </div>
      <img
        src="/images/digital.webp"
        className=" w-[500px] h-[400px] md:h-[550px] rounded-4xl"
      />
    </div>
  );
}
