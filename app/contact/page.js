import Link from "next/link";
import Contact from "../hook/contact";
import Footer from "../hook/footer";
import Navbar from "../hook/navbar";

export default function Contactpage() {
  return (
    <div className="">
      <Navbar />
      <img src="/images/background.jpg" className="h-[350px] w-full" />
      <div className="absolute top-[20%] left-[50%] transform -translate-x-[50%] text-white">
        <p className="font-extrabold text-[40px]">Contact</p>
        <p>
          <Link href="/" className="text-gray-300 cursor-pointer">
            Home
          </Link>{" "}
          / Contact
        </p>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
