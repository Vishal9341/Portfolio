import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);
  const frameRef = useRef(null);

  const titles = portfolioData.personal.titles;

  // Typing effect loop
  useEffect(() => {
    setMounted(true);
    let timer;
    const currentFullText = titles[titleIndex % titles.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentFullText.substring(0, prev.length + 1));
      }, 70);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const handleMouseMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 10, y: py * -10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f17] pt-12 pb-20 flex flex-col justify-center">
      {/* Background Floating Orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[140px] animate-float-reverse" />

      {/* Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div
              className={`mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {portfolioData.personal.statusBadge}
              </span>
              <Sparkles size={13} className="text-cyan-400 ml-1" />
            </div>

            {/* Main Greeting */}
            <h1
              className={`text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1] transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div
              className={`mt-4 flex items-center gap-2 text-xl sm:text-3xl font-semibold text-gray-300 h-10 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-cyan-400 font-mono">&gt;</span>
              <span className="text-gray-200">{displayText}</span>
              <span className="animate-pulse text-cyan-400 font-mono">|</span>
            </div>

            {/* Short Bio */}
            <p
              className={`mt-6 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {portfolioData.personal.bio}
            </p>

            {/* Action Buttons */}
            <div
              className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
              >
                <span>View Projects</span>
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`mt-10 flex items-center gap-5 transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500">Connect:</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gray-900/60 text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gray-900/60 text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gray-900/60 text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Full-Frame Photo Card */}
          <div
            className={`lg:col-span-5 relative flex justify-center transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Glowing Backdrop Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-violet-600/25 to-rose-500/25 blur-2xl opacity-75" />

            <div
              ref={frameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              className="glass-card glass-card-hover relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl p-2.5 shadow-2xl transition-transform duration-200 ease-out border border-white/15"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-950 border border-white/10 shadow-inner">
                {!imageError && portfolioData.personal.avatarUrl ? (
                  <img
                    src={portfolioData.personal.avatarUrl}
                    alt={portfolioData.personal.name}
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                    <span className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                      {portfolioData.personal.shortName || "VK"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Bar */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 text-center"
            >
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}