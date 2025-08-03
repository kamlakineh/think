import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-teal-950 px-[10px] md:px-[100px] py-[60px] flex flex-col gap-y-[20px] justify-center items-center">
      <div className=" flex flex-col md:flex-row justify-around border-t-1 border-b-1 border-gray-600 md:gap-y-0 gap-y-[20px] py-[30px] ">
        <div className=" w-full md:w-[30%]">
          <img
            src="/images/think.png"
            className=" w-[180px] md:w-[250px] md:h-[150px] h-[80px] mb-[20px]"
          />
          <p>
            Your profit-generating digital partner in Ethiopia, blending
            data-driven strategies with cultural expertise.
          </p>
          <div className="flex w-[80%] h-[60px] gap-x-[10px] mt-[20px]">
            <a className="border-1 cursor-pointer  hover:bg-amber-800 border-gray-600 rounded-[50%] h-[40px] w-[40px] flex justify-center items-center">
              <img src="/logos/iconin.png" className="w-[20px] h-[20px]" />
            </a>
            <a className="border-1 cursor-pointer  hover:bg-amber-800 border-gray-600 rounded-[50%] h-[40px] w-[40px] flex justify-center items-center">
              <img src="/logos/icontel.png" className="w-[20px] h-[20px]" />
            </a>
            <a className="border-1 cursor-pointer hover:bg-amber-800 border-gray-600 rounded-[50%] h-[40px] w-[40px] flex justify-center items-center">
              <img src="/logos/icont.png" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <p className="font-bold text-[20px]">Quick Links</p>
          <Link href="/about" className="cursor-pointer">
            About us
          </Link>
          <Link href="/service" className="cursor-pointer">
            Services
          </Link>
          <Link href="/work" className="cursor-pointer">
            Portfolio
          </Link>
          <Link href="/contact" className="cursor-pointer">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <p className="font-bold text-[20px]">Contact</p>
          <p>
            turufat worku buche tower second floor office n
            <span className="underline">o</span> 307
          </p>
          <div>
            <p className="font-bold text-[20px]">Phone</p>
            <ul>
              <p>+251964566128</p>
              <p>+251962432081</p>
            </ul>
          </div>
          <p>
            <span className="font-bold text-[20px]">Email:</span>{" "}
            thinkdigitalagency15@gmail.com
          </p>
        </div>
      </div>
      <p>© 2025 Gursha Production. All Rights Reserved.</p>
    </footer>
  );
}
