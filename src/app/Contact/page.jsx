"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-10 lg:px-16 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-18 text-red-600">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          {/* Name */}
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
              placeholder="Enter your name"
              className="mt-2 w-full p-3 border-b  border-b-gray-300  focus:ring-2 focus:ring-red-300 focus:outline-none"
            />
          </div>

          {/* Email */}
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
              placeholder="Enter your email"
              className="mt-2 w-full p-3 border-b border-b-gray-300  focus:ring-2 focus:ring-red-300 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
