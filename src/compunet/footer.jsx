import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#CACACA] py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo / About */}
          <div>
            <h2 className="font-actay text-start text-2xl text-white mb-4">Scorpio</h2>
            <p className="text-sm font-inter leading-relaxed">
              Building the future with quality and care. Dedicated to excellence and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-actay text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center font-inter text-sm">
              <li><a href="#" className="hover:text-[#B88A44] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#B88A44] transition">About</a></li>
              <li><a href="#" className="hover:text-[#B88A44] transition">Services</a></li>
              <li><a href="#" className="hover:text-[#B88A44] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-actay text-lg text-white mb-4">Contact</h3>
            <p className="font-inter text-center text-sm">
              Email: <a href="mailto:info@scorpio.com" className="hover:text-[#B88A44]">info@scorpio.com</a><br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 scorpio St, City, Country
            </p>
          </div>
        </div>

        <div className="border-t border-[#B88A44]/30 mt-10 pt-6 text-center text-sm text-[#CACACA] font-inter">
          © {new Date().getFullYear()} scorpio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
