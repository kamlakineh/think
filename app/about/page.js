import Link from "next/link";
import About from "../hook/about";
import Footer from "../hook/footer";
import Navbar from "../hook/navbar";

export default function Aboutpage() {
  return (
    <div>
      <Navbar />
      <img
        src="/images/about.jpeg"
        className="h-[350px] w-full brightness-50"
      />
      <div className="absolute top-[20%] left-[50%] transform -translate-x-[50%] text-white">
        <p className="font-extrabold text-[40px]">About</p>
        <p>
          <Link href="/" className="text-gray-300 cursor-pointer">
            Home
          </Link>
          / About
        </p>
      </div>
      <About />
      <Footer />
    </div>
  );
}
