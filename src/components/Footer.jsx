import React from "react";
import { Link } from "react-router";
import Logo from "../assets/navabar/logo.webp";
import goldGbg from "../assets/footer/gold_gbg.webp";
import redGbg from "../assets/footer/red_gbg.webp";

export default function Footer() {
  return (
    <footer className="w-full py-12 relative">
      <img
        src={goldGbg}
        alt="footer background"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] z-1"
      />
      <img
        src={redGbg}
        alt="footer background"
        className="absolute top-0 right-0 w-[400px] h-full z-1"
      />
      <div className="max-w-[1280px] mx-auto rounded-2xl flex flex-col gap-6 bg-[#12131FB2] border border-[#363636] px-6 py-8 relative z-1">
        <div className="flex flex-row justify-between gap-10 pb-3">
          <div className="w-[34%] flex flex-col gap-4">
            <div className="max-w-[188px]">
              <img src={Logo} alt="footer logo" />
            </div>

            <p className="text-[#CACACA]">
              Step into the world of casinos, high stakes, and incredible
              rewards by joining the Scorpion community today!Experience the
              unmatched privileges and benefits of being part of the world’s
              first social online gambling ecosystem powered by $SCORP.
            </p>
          </div>

          <div className="w-[15%] ml-12">
            <h3 className="text-[#ffffff] text-left mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="quick-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="quick-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="quick-link">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link to="/contact" className="quick-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="quick-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Docs */}
          <div className="w-[18%]">
            <h3 className="text-[#ffffff] text-left mb-4">Docs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="quick-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="quick-link">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="quick-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/token-sale-agreement" className="quick-link">
                  Token Sale Agreement
                </Link>
              </li>
              <li>
                <Link to="/live-support-24-7" className="quick-link">
                  Live Support 24/7
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Join Our Social */}
          <div className="w-[18%]">
            <h3 className="text-[#ffffff] text-left mb-4">Join Our Social</h3>
            <div className="flex gap-4 mb-4">
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
            <div className="flex flex-row gap-1 text-[#CACACA]">
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

        <div className="flex flex-col gap-6 pt-6 border-t border-[#363636]">
          <div className="flex flex-col gap-2">
            <h3 className="text-left">Scorpion Casino</h3>
            <p className="text-[#CACACA]  ">Registration Number: 14904288</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link to="/terms-of-service" className="gradient_quick_links">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="gradient_quick_links">
                Privacy Policy
              </Link>
              <Link to="/contact-us" className="gradient_quick_links">
                Contact Us
              </Link>
              <Link to="/token-sale-agreement" className="gradient_quick_links">
                Token Sale Agreement
              </Link>
              <Link to="/buy-scorp-manually" className="gradient_quick_links">
                Buy SCORP Manually
              </Link>
            </div>
          </div>

          <p className="text-[#B4A5A5]">
            Scorpion Casino operates the website Scorpion.casino (“Platform”).
            By using the Platform, you accept our Terms of Service, Privacy
            Policy, Cookie Policy, and the SCORP2.0 Token sale agreement.
            Cryptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go down as well as up. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
            Nothing on this website should be construed as an offer or
            recommendation to buy, sell or invest. You are solely responsible
            for determining whether any purchase or related transaction is
            appropriate for you based on your personal objectives, financial
            situation, and risk tolerance.You should consult with trusted,
            licensed legal professionals and advisors for legal, tax, insurance,
            or business advice. Scorpion Casino does not guarantee any
            performance, outcome, or return of capital for any cryptocurrency
            posted on this website. By accessing this site and any pages
            thereof, you agree to be bound by the SCORP2.0 sales agreement.
            Buying cryptocurrencies involves risk and may result in partial or
            total loss.
          </p>

          <div className="text-center text-[#ffffff]">
            Copyright {new Date().getFullYear()} Scorpion Casino | All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
