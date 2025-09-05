"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // ✅ use this package

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (err) => {
          setStatus("❌ Failed: " + err.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-10 px-6 sm:px-10 lg:px-16 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-red-600 pb-12"
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit} // ✅ fixed here
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name" // ✅ must match EmailJS template variable
              placeholder="Enter your name"
              className="mt-2 w-full p-3 border-b border-b-gray-300 focus:ring-2 focus:ring-red-300 focus:outline-none rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email" // ✅ must match EmailJS template variable
              placeholder="Enter your email"
              className="mt-2 w-full p-3 border-b border-b-gray-300 focus:ring-2 focus:ring-red-300 focus:outline-none rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message" // ✅ must match EmailJS template variable
              rows="5"
              placeholder="Write your message..."
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            Send Message
          </button>

          {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
