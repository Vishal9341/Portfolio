import React from "react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-gray-950 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
        
        {/* Left copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span>{portfolioData.personal.name}</span>
            <span className="text-cyan-400 font-mono text-xs">• Portfolio</span>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} All rights reserved. Crafted with Tailwind CSS & React.
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all hover:border-cyan-400 hover:text-cyan-300 hover:scale-110"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}
