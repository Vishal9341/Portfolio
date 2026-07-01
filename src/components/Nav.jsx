import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, serif; font-feature-settings: "ss01" 1; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-meta { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        .ink-underline {
          position: relative;
        }
        .ink-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: 100%;
          background: #C98A2C;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .ink-underline.is-active::after,
        .ink-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>

      <nav
        className={`font-body sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#14191B]/95 backdrop-blur border-[#C98A2C]/20 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]"
            : "bg-[#14191B] border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          {/* Logo mark */}
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EDE6D6]/25 bg-[#EDE6D6]/5 transition-colors duration-300 group-hover:border-[#C98A2C]/70">
              <span className="font-display text-base italic text-[#EDE6D6]">
                VK.
              </span>
            </span>
            <span className="font-display text-lg tracking-tight text-[#EDE6D6]">
              Vishal Kumar
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`ink-underline font-body text-[15px] font-medium text-[#EDE6D6]/80 transition-colors duration-200 hover:text-[#EDE6D6] ${
                    active === link.label ? "is-active text-[#EDE6D6]" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full border border-[#EDE6D6]/25 px-4 py-2 font-meta text-xs uppercase tracking-[0.15em] text-[#EDE6D6] transition-all duration-300 hover:border-[#C98A2C] hover:bg-[#C98A2C] hover:text-[#14191B] md:inline-flex"
          >
            Let&rsquo;s talk
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EDE6D6]/25 text-[#EDE6D6] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`overflow-hidden border-t border-[#EDE6D6]/10 bg-[#14191B] transition-[max-height,opacity] duration-300 md:hidden ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setOpen(false);
                  }}
                  className={`font-body block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
                    active === link.label
                      ? "bg-[#EDE6D6]/8 text-[#EDE6D6]"
                      : "text-[#EDE6D6]/70 hover:bg-[#EDE6D6]/5 hover:text-[#EDE6D6]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-meta flex items-center justify-center gap-1.5 rounded-full border border-[#C98A2C] px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-[#C98A2C]"
              >
                Let&rsquo;s talk
                <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}