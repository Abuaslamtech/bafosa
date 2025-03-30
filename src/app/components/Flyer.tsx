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
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#573f23]">
        {/* Header Section - More compact */}
        <div className="bg-[#573f23] text-[#f0ede5] py-2 px-3 text-center font-sans">
          <div className="flex flex-col gap-2 items-center justify-between">
            <div>
              <h1 className="text-lg font-bold tracking-tight uppercase">
                Baba Ahmad Foundation
              </h1>
              <h2 className="text-sm font-medium opacity-90">
                Old Students' Association
              </h2>
            </div>
            <div className="bg-[#ffffff] rounded-sm p-1 px-4">
              <h3 className="text-[#573f23] text-sm font-bold flex items-center gap-1">
                Sallah Waleema <PartyPopper size={16} />
              </h3>
            </div>
          </div>
        </div>

        {/* Combined Photo and Details Section */}
        <div className="flex flex-row">
          {/* Photo Section */}
          <div className="relative w-1/2   bg-[rgb(138,123,108)]">
            <div className="absolute inset-0 p-4 bg-[#8a7b6c] opacity-30"></div>
            {photoPreview && !imgError ? (
              <img
                src={photoPreview}
                alt={`${name} - BAFOSA Attendee`}
                className="w-full h-40 object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-40 flex items-center justify-center bg-[#8a7b6c]">
                <span className="text-[#f0ede5] text-base">Photo</span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0  border-b-8 border-[#f0ede5] bg-[#573f23] bg-opacity-70 p-1">
              <h3 className="text-[#f0ede5] text-sm font-bold text-center truncate font-sans">
                {name || "Your Name Here"}
              </h3>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="w-1/2 p-2 bg-[#f0ede5]">
            <div className="space-y-1">
              <div className="flex items-center bg-white rounded-sm p-1 shadow-sm">
                <Calendar className="text-[#573f23] w-4 h-4 mr-1" />
                <span className="text-[#573f23] text-xs font-medium">
                  1 Day After Eid
                </span>
              </div>
              <div className="flex items-center bg-white rounded-sm p-1 shadow-sm">
                <Clock className="text-[#573f23] w-4 h-4 mr-1" />
                <span className="text-[#573f23] text-xs font-medium">
                  9:30 AM
                </span>
              </div>
              <div className="flex items-center bg-white rounded-sm p-1 shadow-sm">
                <MapPin className="text-[#573f23] w-4 h-4 mr-1" />
                <span className="text-[#573f23] text-xs font-medium">
                  Exams Hall
                </span>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="mt-2 text-center bg-[#8a7b6c] rounded-sm p-1">
              <p className="text-[#f0ede5] text-xs uppercase tracking-wider font-sans">
                Under the Leadership of
              </p>
              <h4 className="text-[#f0ede5] text-xs font-bold font-sans">
                Ahmad Aliyu Abdullahi Telex
              </h4>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#573f23] py-1 text-center">
          <p className="text-[#f0ede5] text-base font-bold tracking-wider font-sans">
            I'll Be There
          </p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Flyer);