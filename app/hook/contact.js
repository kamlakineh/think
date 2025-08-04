"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message");
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center">
        <p className="md:text-[60px] text-[35px] text-teal-950 font-extrabold text-center">
          CONTACT
        </p>
        <div className="w-[20%] border-b-4 border-orange-800 m-1"></div>
      </div>
      <p className="text-center opacity-90 text-teal-950 px-[20%]">
        Ready to grow your business? Contact us today
      </p>

      <div className="flex md:flex-row flex-col gap-x-[20px] px-[10px] md:px-[150px] py-[40px]">
        <div className="flex flex-col gap-y-[10px] p-[20px] bg-white shadow-2xl shadow-gray-300">
          <ul className="flex flex-row gap-x-[10px] pb-[15px] group">
            <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-amber-100 group-hover:bg-amber-800">
              <img className="w-[20px] h-[20px]" src="/logos/icona.png" />
            </div>
            <div className="flex flex-col ">
              <p className="font-bold text-[21px] text-teal-950">Address</p>
              <p className="text-black  text-[15px]">
                turufat worku buche tower second floor office n
                <span className="underline">o</span> 307
              </p>
            </div>
          </ul>
          <ul className="flex flex-row gap-x-[10px] pb-[20px] group">
            <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-amber-100 group-hover:bg-amber-800">
              <img className="w-[20px] h-[20px]" src="/logos/iconp.png" />
            </div>
            <div className="flex flex-col ">
              <p className="font-bold text-[21px] text-teal-950">Phone</p>
              <p className="text-black  text-[15px]">+251964566128</p>
              <p className="text-black  text-[15px]">+251962432081</p>
            </div>
          </ul>
          <ul className="flex flex-row gap-x-[10px] pb-[20px] group">
            <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-amber-100 group-hover:bg-amber-800">
              <img className="w-[20px] h-[20px]" src="/logos/icone.png" />
            </div>
            <div className="flex flex-col ">
              <p className="font-bold text-[21px] text-teal-950">Email</p>
              <p className="text-black  text-[15px]">
                thinkdigitalagency15@gmail.com
              </p>
            </div>
          </ul>
          <div className="w-full md:w-[400px] h-[300px]">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d229.4377489481682!2d38.4818093!3d7.040441!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1754317504677!5m2!1sen!2set"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 flex flex-col gap-y-[20px] p-[10px] md:p-[40px] text-black"
        >
          <div className="flex md:flex-row gap-y-[20px] flex-col gap-x-[20px]">
            <label className="flex flex-col gap-y-[10px] w-full">
              <p>Your Name</p>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-white text-black w-full h-[40px] text-[30px] border-2 border-gray-300"
              />
            </label>
            <label className="flex flex-col gap-y-[10px] w-full">
              <p>Your email</p>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-white text-black w-full h-[40px] text-[30px] border-2 border-gray-300"
              />
            </label>
          </div>

          <label className="flex flex-col gap-y-[10px]">
            <p>Subject</p>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="bg-white text-black w-full h-[40px] text-[30px] border-2 border-gray-300"
            />
          </label>

          <label className="flex flex-col gap-y-[10px]">
            <p>Message</p>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="bg-white h-[250px] border-2 border-gray-300"
            />
          </label>

          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-950 text-white text-20px py-[10px] font-bold rounded-3xl w-[160px] self-center"
          >
            Send Message
          </button>

          {/* Optional: Status Message */}
          {status && (
            <p className="text-center text-teal-900 font-semibold mt-4">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
