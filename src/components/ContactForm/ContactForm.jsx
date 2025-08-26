import React from "react";
// import bgImage from "./db4d8a7b-e5d1-45f3-903a-041d1a546e4d.png"; // adjust path if needed

const ContactForm = () => {
  return (
    <section
      className="flex items-center justify-center h-180 bg-cover bg-center"
      style={{
        backgroundImage: `url(${"public/pattern.png"})`,
      }}
    >
      <form className="w-full max-w-2xl bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg">
        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Service Dropdown */}
        <div className="mb-4">
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Service Interested In</option>
            <option value="web">Web Development</option>
            <option value="design">UI/UX Design</option>
            <option value="seo">SEO Optimization</option>
            <option value="marketing">Digital Marketing</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-6">
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-8 py-2 rounded-full transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

