import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3.5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo mark */}
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-rose-500/20 border border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/50">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 text-base">
                {portfolioData.personal.shortName || "VK"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-100 tracking-tight text-base group-hover:text-cyan-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-gray-900/60 p-1.5 backdrop-blur-md md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActive(link.label)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 block ${
                      isActive
                        ? "text-cyan-300 font-semibold"
                        : "text-gray-400 hover:text-gray-100"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 -z-10" />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 rounded-full p-[1px] font-mono text-xs uppercase tracking-wider font-semibold text-gray-200 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-rose-500 opacity-80 blur-[2px]" />
              <span className="relative flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 transition-all duration-300 hover:bg-gray-900">
                <span>Let's Talk</span>
                <ArrowUpRight size={14} className="text-cyan-400" />
              </span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gray-900/80 text-gray-300 backdrop-blur-md transition-colors hover:text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} className="text-cyan-400" /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`overflow-hidden border-b border-white/10 bg-gray-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
            open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <ul className="flex flex-col gap-2 px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    active === link.label
                      ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {active === link.label && <Sparkles size={14} className="text-cyan-400" />}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}