import React from "react";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 text-center bg-[repeating-linear-gradient(90deg,#f9f9f9,#f9f9f9_10px,#ffffff_20px,#ffffff_30px)]">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        Fill Out Your Details
      </h2>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-gray-700 text-sm sm:text-base">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <FiPhone className="text-lg" />
          <span>+91 98765 43210</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <FiMail className="text-lg" />
          <span>hello@smallcopper.com</span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-2">
          <FiSend className="text-lg" />
          <span>Address</span>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
