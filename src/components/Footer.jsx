import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#000000] via-[#1a1a1a] to-[#2a2520] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* Main Footer Content - 4 Columns */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="flex-1 max-w-xs">
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-white">SCORPION </span>
                <span className="text-[#d4af37]">CASINO</span>
              </h2>
            </div>
            <p className="text-[#CACACA] text-sm leading-relaxed">
              Step into the world of casinos, high stakes, and incredible
              rewards by joining the Scorpion community today! Experience the
              unmatched privileges and benefits of being part of the world's
              first social online gambling ecosystem powered by $SCORP.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Docs */}
          <div className="">
            <h3 className="text-white font-bold text-lg mb-4">Docs</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Cookies Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Token Sale Agreement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#CACACA] hover:text-white hover:underline transition-all text-sm"
                >
                  Live Support 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Join Our Social */}
          <div className="">
            <h3 className="text-white font-bold text-lg mb-4">
              Join Our Social
            </h3>
            <div className="flex gap-4 mb-4">
              {/* Twitter Icon */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Telegram Icon */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Telegram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-[#CACACA]">
              <span className="block mb-1">Email:</span>
              <a
                href="mailto:info@scropion.casino"
                className="hover:text-white hover:underline transition-all"
              >
                info@scropion.casino
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Company Info Section */}
        <div className="mb-6">
          <h3 className="text-white font-bold text-lg mb-2">Scorpion Casino</h3>
          <p className="text-[#CACACA] text-xs mb-3">
            Registration Number: 14904288
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs mb-4">
            <a
              href="#"
              className="text-[#CACACA] hover:text-white hover:underline transition-all"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#CACACA] hover:text-white hover:underline transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#CACACA] hover:text-white hover:underline transition-all"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-[#CACACA] hover:text-white hover:underline transition-all"
            >
              Token Sale Agreement
            </a>
            <a
              href="#"
              className="text-[#CACACA] hover:text-white hover:underline transition-all"
            >
              Buy SCORP Manually
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-6">
          <p className="text-[#808080] text-xs leading-relaxed">
            Scorpion Casino operates the website Scorpion.casino ("Platform").
            By using the Platform, you accept our Terms of Service, Privacy
            Policy, Cookie Policy, and the SCORP2.0 Token sale agreement.
            Cryptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go down as well as up. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
            You, and you alone, are solely responsible for determining whether
            any purchase or related transaction is appropriate for you based on
            your personal objectives, financial situation, and risk tolerance.
            You should consult with trusted, licensed legal professionals for
            legal, tax, insurance, or business advice. Scorpion Casino does not
            guarantee any performance, outcome, or return of capital for any
            cryptocurrency posted on this website. By accessing this site and
            any pages thereof, you agree to be bound by the SCORP2.0 sales
            agreement. Buying cryptocurrencies involves risk and may not be
            suitable for all investors.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#808080] text-xs pt-4 border-t border-gray-800">
          Copyright {new Date().getFullYear()} Scorpion Casino | All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
