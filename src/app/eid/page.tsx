import React from "react";
import { Calendar, Clock, MapPin, PartyPopper } from "lucide-react";

const ProfessionalEventFlyer = () => {
  return (
    <div className="min-h-screen bg-[#f0ede5] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#573f23]">
        {/* Header Section */}
        <div className="bg-[#573f23] text-[#f0ede5] py-6 px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight uppercase">
            Baba Ahmad Foundation
          </h1>
          <h2 className="text-xl font-semibold opacity-90 mt-1">
            Old Students' Association (BAFOSA)
          </h2>
          <div className="bg-[#ffffff] rounded-xl p-2 mt-2">
            <h3 className="flex flex-row  justify-center gap-2 text-[#573f23] text-2xl font-bold text-center">
              Annual Sallah Waleema <span><PartyPopper /></span> 
            </h3>
          </div>
        </div>

        {/* Image Section with Overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#8a7b6c] opacity-30"></div>
          <div className="w-[20rem] m-auto absolute bottom-2 left-0 right-0 bg-[#573f23] bg-opacity-70 rounded-xl p-2">
            <h3 className="text-[#f0ede5] text-2xl font-bold text-center">
              Abdullahi Ismail
            </h3>
          </div>
          <img
            src="/abuaslam.png"
            alt="Event Leader"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Event Details */}
        <div className="p-6 bg-[#f0ede5]">
          <div className="flex flex-row  gap-2">
            <div className="flex items-center space-x-4 bg-white rounded-xl p-3 shadow-md">
              <Calendar className="text-[#573f23] w-6 h-6" />
              <span className="text-[#573f23] font-semibold">
                1 Day After Eid
              </span>
            </div>

            <div className="flex items-center space-x-4 bg-white rounded-xl p-3 shadow-md">
              <Clock className="text-[#573f23] w-6 h-6" />
              <span className="text-[#573f23] font-semibold">
                9:30 AM 
              </span>
            </div>

            <div className="flex items-center space-x-4 bg-white rounded-xl p-3 shadow-md">
              <MapPin className="text-[#573f23] w-6 h-6" />
              <span className="text-[#573f23] font-semibold">Exams Hall</span>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-6 text-center bg-[#8a7b6c] rounded-xl p-4">
            <p className="text-[#f0ede5] text-sm uppercase tracking-wider mb-2">
              Under the Leadership of
            </p>
            <h4 className="text-[#f0ede5] text-2xl font-bold">
              Ahmad Aliyu Abdullahi Telex
            </h4>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#573f23] p-4 text-center">
          <p className="text-[#f0ede5] text-2xl font-bold tracking-wider">
            I'll Be There
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalEventFlyer;
