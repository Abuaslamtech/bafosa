import { Calendar, Clock, MapPin, PartyPopper } from "lucide-react";
import { forwardRef, ForwardedRef, useState } from "react";

type FlyerProps = {
  name: string;
  photoPreview: string | null | undefined;
};

function Flyer(
  { name, photoPreview }: FlyerProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full flex items-center justify-center p-2" ref={ref}>
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#573f23]">
        {/* Header Section */}
        <div className="bg-[#573f23] text-[#f0ede5] py-4 px-3 text-center font-sans">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase">
            Baba Ahmad Foundation
          </h1>
          <h2 className="text-base sm:text-lg font-semibold opacity-90 mt-1">
            Old Students' Association (BAFOSA)
          </h2>
          <div className="bg-[#ffffff] rounded-xl p-2 mt-2">
            <h3 className="flex flex-row justify-center gap-2 text-[#573f23] text-lg sm:text-xl font-bold text-center">
              Annual Sallah Waleema{" "}
              <span>
                <PartyPopper size={20} />
              </span>
            </h3>
          </div>
        </div>
        {/* Image Section with Overlay */}
        <div className="relative h-64 bg-[#8a7b6c]">
          <div className="absolute inset-0 bg-[#8a7b6c] opacity-30"></div>
          {photoPreview && !imgError ? (
            <img
              src={photoPreview}
              alt={`${name} - BAFOSA Sallah Convention Attendee`}
              className="w-full object-cover h-64"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-[#8a7b6c]">
              <span className="text-[#f0ede5] text-lg">Photo</span>
            </div>
          )}
          <div className="w-full max-w-[90%] m-auto absolute bottom-2 left-0 right-0 bg-[#573f23] bg-opacity-70 rounded-xl p-2">
            <h3 className="text-[#f0ede5] text-xl font-bold text-center truncate font-sans">
              {name || "Your Name Here"}
            </h3>
          </div>
        </div>
        {/* Event Details */}
        <div className="p-3 sm:p-4 bg-[#f0ede5]">
          <div className="grid grid-cols-3 gap-1">
            <div className="flex flex-col items-center justify-center bg-white rounded-xl p-2 shadow-md">
              <Calendar className="text-[#573f23] w-5 h-5" />
              <span className="text-[#573f23] text-xs font-semibold text-center font-sans">
                1 Day After Eid
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl p-2 shadow-md">
              <Clock className="text-[#573f23] w-5 h-5" />
              <span className="text-[#573f23] text-xs font-semibold font-sans">
                9:30 AM
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl p-2 shadow-md">
              <MapPin className="text-[#573f23] w-5 h-5" />
              <span className="text-[#573f23] text-xs font-semibold font-sans">
                Exams Hall
              </span>
            </div>
          </div>
          {/* Leadership Section */}
          <div className="mt-4 text-center bg-[#8a7b6c] rounded-xl p-3">
            <p className="text-[#f0ede5] text-xs uppercase tracking-wider mb-1 font-sans">
              Under the Leadership of
            </p>
            <h4 className="text-[#f0ede5] text-lg font-bold font-sans">
              Ahmad Aliyu Abdullahi Telex
            </h4>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-[#573f23] p-3 text-center">
          <p className="text-[#f0ede5] text-xl font-bold tracking-wider font-sans">
            I'll Be There
          </p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Flyer);
