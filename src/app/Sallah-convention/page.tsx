"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  PartyPopper,
  Upload,
  CreditCard,
  FileText,
  Users,
  Gift,
  Check,
  AlertCircle,
  MoonStar,
  LayoutList,
  HandCoins,
  ImagePlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Flyer from "../components/Flyer";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";
import { arrayBuffer } from "stream/consumers";

// Import the existing flyer component
// import ProfessionalEventFlyer from "../components/ProfessionalEventFlyer";

export default function SallahConvention() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showFlyer, setShowFlyer] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [activeTab, setActiveTab] = useState("about");
  const flyerRef = useRef(null);

  const dataURLToBlob = (dataUrl: string) => {
    let byteString: string;
    if (dataUrl.split(",")[0].indexOf("base64") >= 0) {
      byteString = atob(dataUrl.split(",")[1]);
    } else {
      byteString = decodeURIComponent(dataUrl.split(",")[1]);
    }
    const MIMEString: string = dataUrl
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];

    const ab: ArrayBuffer = new ArrayBuffer(byteString.length);
    const ia: Uint8Array = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ab], { type: MIMEString });
  };
  const saveFlyer = () => {
    if (flyerRef.current === null) {
      return;
    }
    setTimeout(() => {
      toPng(flyerRef.current!, {
        cacheBust: true,
        quality: 1,
        pixelRatio: 2,
        skipFonts: true, // Skip font processing which is causing the error
        fontEmbedCSS: undefined, // Don't try to embed fonts
        backgroundColor: "#ffffff",
      })
        .then((dataUrl) => {
          try {
            const blob = dataURLToBlob(dataUrl);
            const fileName = `${name.replace(
              /\s+/g,
              "-"
            )}-BAFOSA-Sallah-Convention.png`;
            saveAs(blob, fileName);

            setFormStatus({
              message: "Flyer downloaded successfully!",
              type: "success",
            });
          } catch (error) {
            console.error("Error in blob conversion", error);
            setFormStatus({
              message: "Error converting image: " + error.message,
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.error("Error generating flyer", err);
          setFormStatus({
            message: "Error generating flyer: " + err.message,
            type: "error",
          });
        });
    }, 300);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormStatus({
        message: "Please enter your name",
        type: "error",
      });
      return;
    }

    if (!photo) {
      setFormStatus({
        message: "Please upload a photo",
        type: "error",
      });
      return;
    }

    // In a real application, you would process the form data here
    // For this demo, we'll just show the flyer
    setShowFlyer(true);
    setFormStatus({
      message: "Your personalized flyer has been generated!",
      type: "success",
    });
  };

  const resetForm = () => {
    setName("");
    setPhoto(null);
    setPhotoPreview(null);
    setShowFlyer(false);
    setFormStatus({ message: "", type: "" });
  };

  return (
    <div className=" bg-[#f0ede5] flex flex-col">
      {/* navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero
        title="Annual Sallah Convention"
        info="Join BAFOSA for a day of celebration, networking, and giving back to our community"
        btnTitle="Generate Flyer"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation Tabs */}
        <div className="flex  border-b border-[#8a7b6c]/30 mb-8 pt-4 flex-row justify-between ">
          <button
            className={`px-4 py-2 font-medium flex flex-col gap-2 justify-center items-center ${
              activeTab === "about"
                ? "text-[#573f23] border-b-2 border-[#573f23]"
                : "text-[#8a7b6c] hover:text-[#573f23]"
            }`}
            onClick={() => setActiveTab("about")}
          >
            <MoonStar /> Convention
          </button>
          <button
            className={`px-4 py-2 font-medium flex flex-col gap-2 justify-center items-center ${
              activeTab === "schedule"
                ? "text-[#573f23] border-b-2 border-[#573f23]"
                : "text-[#8a7b6c] hover:text-[#573f23]"
            }`}
            onClick={() => setActiveTab("schedule")}
          >
            <LayoutList /> Schedule
          </button>
          <button
            className={`px-4 py-2 font-medium flex flex-col gap-2 justify-center items-center ${
              activeTab === "contribute"
                ? "text-[#573f23] border-b-2 border-[#573f23]"
                : "text-[#8a7b6c] hover:text-[#573f23]"
            }`}
            onClick={() => setActiveTab("contribute")}
          >
            <HandCoins /> Contribute
          </button>
          <button
            className={`px-4 py-2 font-medium flex flex-col gap-2 justify-center items-center ${
              activeTab === "flyer"
                ? "text-[#573f23] border-b-2 border-[#573f23]"
                : "text-[#8a7b6c] hover:text-[#573f23]"
            }`}
            onClick={() => setActiveTab("flyer")}
          >
            <ImagePlus /> Flyer
          </button>
        </div>

        {/* About Tab Content */}
        {activeTab === "about" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#573f23] mb-4">
                About Our Sallah Convention
              </h2>
              <p className="mb-4 text-[#573f23]/80">
                The Annual Sallah Convention is BAFOSA's premier gathering that
                brings together alumni from all generations in a celebration of
                our shared values and commitment to community development.
              </p>
              <p className="mb-4 text-[#573f23]/80">
                This year's convention will focus on strengthening our bonds
                while raising funds for essential projects at our alma mater,
                including classroom renovations, scholarship programs, and
                mentorship initiatives.
              </p>
              <p className="mb-6 text-[#573f23]/80">
                Join us for a day filled with networking, inspirational talks,
                recognition of outstanding alumni achievements, and traditional
                Sallah festivities.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#573f23] mb-3">
                  Event Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="text-[#573f23] w-5 h-5 mr-3" />
                    <span className="text-[#573f23]/80">
                      1 Day After Eid-el-Fitr
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-[#573f23] w-5 h-5 mr-3" />
                    <span className="text-[#573f23]/80">9:30 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-[#573f23] w-5 h-5 mr-3" />
                    <span className="text-[#573f23]/80">
                      Baba Ahmad Foundation Examination Hall
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-[#573f23] w-5 h-5 mr-3" />
                    <span className="text-[#573f23]/80">
                      Expected Attendance: 200+ Alumni
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#573f23] mb-4">
                Our Plans & Goals
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h3 className="text-xl font-bold text-[#573f23] mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Convention Objectives
                </h3>
                <ul className="space-y-3 text-[#573f23]/80">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      Raise ₦5,000,000 for classroom renovation project
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      Launch mentorship program connecting alumni with current
                      students
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      Establish annual scholarship fund for deserving students
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      Strengthen alumni network through enhanced communication
                      channels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      Recognize and honor distinguished alumni achievements
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#573f23] rounded-xl p-6 text-[#f0ede5] shadow-md">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <PartyPopper className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Traditional Sallah feast and celebration</span>
                  </li>
                  <li className="flex items-start">
                    <PartyPopper className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Keynote address by Ahmad Aliyu Abdullahi Telex</span>
                  </li>
                  <li className="flex items-start">
                    <PartyPopper className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Presentation of alumni achievement awards</span>
                  </li>
                  <li className="flex items-start">
                    <PartyPopper className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Networking sessions and reunion opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <PartyPopper className="w-5 h-5 mr-2 mt-0.5" />
                    <span>Project fundraising drive and progress updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab Content */}
        {activeTab === "schedule" && (
          <div>
            <h2 className="text-2xl font-bold text-[#573f23] mb-6">
              Event Schedule
            </h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-[#573f23] text-[#f0ede5] p-4">
                <h3 className="text-xl font-bold">Convention Day Schedule</h3>
                <p className="text-sm opacity-90">1 Day After Eid-el-Fitr</p>
              </div>

              <div className="divide-y divide-[#8a7b6c]/20">
                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      9:30 AM - 10:00 AM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Registration & Welcome Tea
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Arrival of guests and registration at the entrance of the
                    examination hall
                  </p>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      10:00 AM - 10:30 AM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Opening Ceremony
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Welcome address by the BAFOSA Chairman and opening prayer
                  </p>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      10:30 AM - 11:30 AM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Keynote Address
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Special keynote address by Ahmad Aliyu Abdullahi Telex on
                    "Giving Back: The Alumni Responsibility"
                  </p>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      11:30 AM - 12:30 PM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Project Presentations
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Presentations on ongoing and upcoming BAFOSA community
                    projects with progress reports
                  </p>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      12:30 PM - 1:30 PM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Zuhr Prayer & Lunch Break
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Traditional Sallah feast and networking opportunity
                  </p>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      1:30 PM - 2:30 PM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Alumni Recognition
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Awards ceremony for distinguished alumni and recognition of
                    major contributors
                  </p>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      2:30 PM - 3:30 PM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Fundraising Drive
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Main fundraising session with pledge announcements and
                    on-the-spot contributions
                  </p>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#f0ede5] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-[#573f23]">
                      3:30 PM - 4:00 PM
                    </span>
                    <span className="text-sm text-[#8a7b6c] italic">
                      Closing Ceremony
                    </span>
                  </div>
                  <p className="text-[#573f23]/80">
                    Vote of thanks, closing prayer, and group photographs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#8a7b6c]/20 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="text-[#573f23] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#573f23]/80 text-sm">
                  Please note that the schedule is subject to minor adjustments.
                  All attendees are encouraged to arrive by 9:15 AM to complete
                  registration before the opening ceremony. Comfortable attire
                  is recommended, preferably in traditional Sallah celebration
                  style.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contribute Tab Content */}
        {activeTab === "contribute" && (
          <div>
            <h2 className="text-2xl font-bold text-[#573f23] mb-6">
              How to Contribute
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-[#573f23] mb-4">
                    Why Your Support Matters
                  </h3>
                  <p className="mb-4 text-[#573f23]/80">
                    Your contribution to the BAFOSA Sallah Convention fund
                    directly impacts the quality of education and facilities at
                    Baba Ahmad Foundation. We are targeting to raise ₦5,000,000
                    to support:
                  </p>
                  <ul className="space-y-3 text-[#573f23]/80">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                      <span>
                        Complete renovation of three classrooms (₦2,500,000)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                      <span>
                        Scholarship fund for 10 deserving students (₦1,500,000)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                      <span>
                        Library resources and educational materials (₦700,000)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                      <span>
                        Convention logistics and administrative costs (₦300,000)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-[#573f23] mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Bank Transfer Details
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-[#8a7b6c]/30 rounded-lg p-4">
                      <p className="font-medium text-[#573f23]">Bank Name:</p>
                      <p className="text-[#573f23]/80">First Bank of Nigeria</p>
                    </div>

                    <div className="border border-[#8a7b6c]/30 rounded-lg p-4">
                      <p className="font-medium text-[#573f23]">
                        Account Name:
                      </p>
                      <p className="text-[#573f23]/80">
                        Baba Ahmad Foundation Old Students Association
                      </p>
                    </div>

                    <div className="border border-[#8a7b6c]/30 rounded-lg p-4">
                      <p className="font-medium text-[#573f23]">
                        Account Number:
                      </p>
                      <p className="text-[#573f23]/80">3141592653</p>
                    </div>

                    <div className="border border-[#8a7b6c]/30 rounded-lg p-4">
                      <p className="font-medium text-[#573f23]">Reference:</p>
                      <p className="text-[#573f23]/80">
                        BAFOSA Sallah 2025 + [Your Name]
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-[#f0ede5] rounded-lg p-4">
                    <p className="text-sm text-[#573f23]/80">
                      <strong>Important:</strong> Please send a confirmation of
                      your transfer to our treasurer at{" "}
                      <a
                        href="mailto:treasurer@bafosa.org"
                        className="text-[#573f23] underline"
                      >
                        treasurer@bafosa.org
                      </a>{" "}
                      or via WhatsApp at <strong>+234 803 456 7890</strong> to
                      ensure proper recording of your contribution.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-[#573f23] mb-4">
                    Other Ways to Contribute
                  </h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-[#573f23] pl-4">
                      <h4 className="font-bold text-[#573f23]">
                        Material Donations
                      </h4>
                      <p className="text-sm text-[#573f23]/80">
                        You can donate books, computers, furniture, or other
                        educational materials. Contact our logistics coordinator
                        at{" "}
                        <a
                          href="mailto:logistics@bafosa.org"
                          className="text-[#573f23] underline"
                        >
                          logistics@bafosa.org
                        </a>{" "}
                        to arrange.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#573f23] pl-4">
                      <h4 className="font-bold text-[#573f23]">
                        Volunteer Your Time
                      </h4>
                      <p className="text-sm text-[#573f23]/80">
                        We welcome volunteers to help organize the convention,
                        mentor students, or assist with specific projects. Sign
                        up at the convention or email{" "}
                        <a
                          href="mailto:volunteer@bafosa.org"
                          className="text-[#573f23] underline"
                        >
                          volunteer@bafosa.org
                        </a>
                        .
                      </p>
                    </div>

                    <div className="border-l-4 border-[#573f23] pl-4">
                      <h4 className="font-bold text-[#573f23]">
                        Professional Services
                      </h4>
                      <p className="text-sm text-[#573f23]/80">
                        Offer your professional expertise in areas such as
                        teaching, counseling, IT support, or maintenance work.
                        Your skills are valuable to our school community.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#573f23] pl-4">
                      <h4 className="font-bold text-[#573f23]">
                        Spread the Word
                      </h4>
                      <p className="text-sm text-[#573f23]/80">
                        Help us reach more alumni by sharing convention
                        information with your classmates and on social media
                        using hashtag #BAFOSA2025.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Flyer Tab Content */}
        {activeTab === "flyer" && (
          <div>
            <h2 className="text-2xl font-bold text-[#573f23] mb-6">
              Create Your Personalized Convention Flyer
            </h2>

            {!showFlyer ? (
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="mb-6 text-[#573f23]/80">
                  Generate a personalized flyer for the Annual Sallah Convention
                  by providing your name and uploading a photo. Share your flyer
                  on social media to encourage other alumni to attend!
                </p>

                {formStatus.message && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      formStatus.type === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    <div className="flex items-center">
                      {formStatus.type === "error" ? (
                        <AlertCircle className="w-5 h-5 mr-2" />
                      ) : (
                        <Check className="w-5 h-5 mr-2" />
                      )}
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#573f23] mb-2"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-[#8a7b6c]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#573f23]"
                      placeholder="Enter your name as you want it to appear on the flyer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium text-[#573f23] mb-2"
                    >
                      Your Photo
                    </label>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-2 border-dashed border-[#8a7b6c]/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <Upload className="text-[#573f23] w-8 h-8 mb-2" />
                        <p className="text-sm text-[#573f23]/80 mb-2">
                          Upload a clear, professional photo of yourself
                        </p>
                        <p className="text-xs text-[#8a7b6c] mb-4">
                          JPG, PNG or GIF format, Max 5MB
                        </p>
                        <input
                          type="file"
                          id="photo"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById("photo").click()
                          }
                          className="px-4 py-2 bg-[#573f23] text-white rounded-md hover:bg-[#573f23]/90 transition-colors"
                        >
                          Select Photo
                        </button>
                      </div>

                      <div className="bg-[#f0ede5] rounded-lg p-4 flex flex-col items-center justify-center">
                        {photoPreview ? (
                          <div className="w-full">
                            <h4 className="text-sm font-medium text-[#573f23] mb-2">
                              Photo Preview:
                            </h4>
                            <div className="relative w-40 h-40 mx-auto border border-[#8a7b6c]/30 rounded-lg overflow-hidden">
                              <Image
                                src={photoPreview}
                                alt="Preview"
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="text-center text-[#8a7b6c]">
                            <p>No photo selected</p>
                            <p className="text-sm">Preview will appear here</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 border border-[#573f23] text-[#573f23] rounded-md hover:bg-[#f0ede5] transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#573f23] text-white rounded-md hover:bg-[#573f23]/90 transition-colors"
                    >
                      Generate Flyer
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#573f23]">
                    Your Personalized Flyer
                  </h3>
                  <p className="text-[#8a7b6c]">
                    Share it on social media with #BAFOSA2025
                  </p>
                </div>

                <div className="mb-6" ref={flyerRef}>
                  <Flyer name={name} photoPreview={photoPreview} />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 border border-[#573f23] text-[#573f23] rounded-md hover:bg-[#f0ede5] transition-colors"
                  >
                    Create Another
                  </button>

                  <button
                    onClick={saveFlyer}
                    className="px-4 py-2 bg-[#573f23] text-white rounded-md hover:bg-[#573f23]/90 transition-colors"
                  >
                    Download Flyer
                  </button>
                </div>
              </div>
            )}

            <div className="mt-8 bg-[#8a7b6c]/20 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="text-[#573f23] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#573f23]/80 text-sm">
                  By creating and sharing your personalized flyer, you help us
                  reach more alumni and increase attendance at our convention.
                  Each shared flyer creates awareness and strengthens our
                  community. Please ensure your photo follows our community
                  guidelines.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
