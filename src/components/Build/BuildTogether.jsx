import React from "react";

const BuildTogether = () => {
  return (
   <div className="w-[100%] ">

     <section className="flex flex-col items-center justify-center py-10 w-full  px-6 text-center bg-[repeating-linear-gradient(90deg,#f9f9f9,#f9f9f9_10px,#ffffff_20px,#ffffff_30px)]">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
        Let’s Build <br className="sm:hidden" />
        <span className="block sm:inline">Something Together</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl">
        Have an idea or a project in mind? We’d love to hear about it. 
        Our team is ready to help you bring it to life.
      </p>
    </section>
   </div>
  );
};

export default BuildTogether;
