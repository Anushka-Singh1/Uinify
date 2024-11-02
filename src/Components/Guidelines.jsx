import React from "react";

function Guidelines() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white font-serif p-8 space-y-6">
      <div className="text-3xl font-bold text-center mb-4">
        Just a Few Steps Away from Stylish React Components!
      </div>
      <div className="text-lg leading-relaxed bg-gradient-to-r from-black to-blue-900 opacity-90 shadow-2xl p-6 rounded-lg text-center w-[70%]">
        <div className="space-y-4">
          <p>First, let's set up your React + Vite Project!</p>
          <p>
            Start creating stylish React components in no time with a fast and
            lightweight setup.
          </p>
        </div>
        <div className="mt-6">
          <a
            href="https://vite.dev/guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6D7179] hover:bg-[#080808] text-white px-6 py-3 rounded-xl transition duration-200"
          >
            Start with Vite Setup Guide
          </a>
        </div>
      </div>

      <div className="text-lg leading-relaxed bg-gradient-to-r from-black to-blue-900 opacity-90 shadow-2xl p-6 rounded-lg text-center w-[70%] space-y-8">
        <p>
          Now, let’s set up <strong>Tailwind CSS</strong> to supercharge your
          styling!
        </p>
        <p>
          Quickly add utility-first classes and customize your components with
          ease.
        </p>
        <div className="mt-6">
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6D7179] hover:bg-[#080808] text-white px-6 py-3 rounded-xl transition duration-200 mb-4"
          >
            Set Up Tailwind CSS
          </a>
        </div>
          </div>
        <div className="text-white text-center text-xl">If you are done with setup, explore the components and use them effortlessly!</div>
    </div>
  );
}

export default Guidelines;
