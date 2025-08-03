import Link from "next/link";
import About from "../hook/about";
import Footer from "../hook/footer";
import Navbar from "../hook/navbar";
import Services from "../hook/ourserv";

export default function Servicepage() {
  return (
    <div className="">
      <Navbar />
      <img src="/images/background.jpg" className="h-[350px] w-full" />
      <div className="absolute top-[20%] left-[50%] transform -translate-x-[50%] text-white">
        <p className="font-extrabold text-[40px]">Service</p>
        <p>
          <Link href="/" className="text-gray-300 cursor-pointer">
            Home
          </Link>
          / Service
        </p>
      </div>
      <Services />
      <Footer />
    </div>
  );
}
