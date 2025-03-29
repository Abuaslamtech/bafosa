import React from 'react'

export default function Hero({title,info,btnTitle }) {
  return (
    <header
        className="relative py-8 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(87, 63, 35, 0.7), rgba(87, 63, 35, 0.7)), url("/logo.png")',
        }}
      >
        <div className="container mx-auto flex flex-col justify-between gap-4  px-4 pt-22 text-center text-[#f0ede5]">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            {title}
          </h1>
          <div className="flex flex-col items-center gap-6 bg-[#8a7b6c] rounded-lg opacity-80 py-8 shadow-sm ">
            <p className="text-xl text-[#f0ede5] font-bold max-w-2xl mx-auto ">
             {info}
            </p>
            <button className="hover:bg-[#f0ede5] bg-[#573f23] border-white border-2 text-white hover:text-[#573f23] px-8 py-3 rounded-full text-xl hover:bg-opacity-90 transition">
              {btnTitle}
            </button>
          </div>
        </div>
      </header>
  )
}
