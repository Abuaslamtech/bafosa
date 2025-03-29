import Image from "next/image";
import {
  MapPin,
  Users,
  Target,
  Eye,
  Phone,
  Mail,
  User,
  Goal,
  PhoneCall,
} from "lucide-react";
import Memories from "./components/Memories";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#f0ede5]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title=" Baba Ahmad Foundation Old Students' Association (BAFOSA)"
        info="Connecting, Inspiring, and Empowering Alumni to Make a Difference"
        btnTitle="Get Involved"
      />

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#573f23]">
                About Us
              </h2>
              <p className="text-[#7a726c] leading-relaxed">
                The Baba Ahmad Foundation Old Students' Association (BAFOSA) is
                a vibrant community of alumni dedicated to preserving our
                legacy, supporting current students, and creating meaningful
                connections that last a lifetime.
              </p>
              <div className="mt-8 flex space-x-4">
                <div className="bg-[#f0ede5] p-4 rounded-xl text-center">
                  <Users className="w-12 h-12 mx-auto text-[#573f23] mb-2" />
                  <span className="font-bold text-[#573f23]">500+ Members</span>
                </div>
                <div className="bg-[#f0ede5] p-4 rounded-xl text-center">
                  <MapPin className="w-12 h-12 mx-auto text-[#573f23] mb-2" />
                  <span className="font-bold text-[#573f23]">Nationwide</span>
                </div>
              </div>
            </div>
            <Memories />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16 bg-[#f0ede5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Target className="w-16 h-16 text-[#573f23] mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-[#573f23]">
                Our Mission
              </h3>
              <p className="text-[#7a726c]">
                To foster a strong, supportive network of alumni who are
                committed to personal growth, professional development, and
                giving back to our community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Eye className="w-16 h-16 text-[#573f23] mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-[#573f23]">
                Our Vision
              </h3>
              <p className="text-[#7a726c]">
                To be a leading alumni association that empowers members to
                become transformative leaders and make a positive impact in
                society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#573f23] mb-4">
              Contact Us
            </h2>
            <p className="text-[#7a726c] max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us for any inquiries,
              collaborations, or just to say hello!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#f0ede5] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#573f23] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#573f23] w-6 h-6" />
                  <span className="text-[#7a726c]">+234 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#573f23] w-6 h-6" />
                  <span className="text-[#7a726c]">info@bafosa.org</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#573f23] w-6 h-6" />
                  <span className="text-[#7a726c]">
                    123 Alumni Street, City, Country
                  </span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border-2 border-[#8a7b6c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#573f23]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border-2 border-[#8a7b6c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#573f23]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border-2 border-[#8a7b6c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#573f23]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#573f23] text-[#f0ede5] py-3 rounded-lg hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#573f23] text-[#f0ede5] py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-[#8a7b6c]">
              Facebook
            </a>
            <a href="#" className="hover:text-[#8a7b6c]">
              Twitter
            </a>
            <a href="#" className="hover:text-[#8a7b6c]">
              LinkedIn
            </a>
          </div>
          <p>
            &copy; 2025 Baba Ahmad Foundation Old Students' Association. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
