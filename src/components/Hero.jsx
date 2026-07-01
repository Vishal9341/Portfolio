import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

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
    <section className="relative w-full overflow-hidden bg-[#14191B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-meta { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        @keyframes rise-in {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rise {
          opacity: 0;
          animation: rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes drift {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(14px, -18px) scale(1.04); }
          66%  { transform: translate(-10px, 12px) scale(0.98); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .ink-blob {
          animation: drift 14s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        .cursor {
          animation: blink 1.1s step-end infinite;
        }

        .photo-frame {
          transition: transform 0.15s ease-out;
          will-change: transform;
        }
      `}</style>

      {/* faint grid texture, purely atmospheric */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#EDE6D6 1px, transparent 1px), linear-gradient(90deg, #EDE6D6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-32">
        {/* Left: text */}
        <div>
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-[#EDE6D6]/15 bg-[#EDE6D6]/5 px-3 py-1.5 ${
              mounted ? "rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.05s" }}
          >
            <Sparkles size={13} className="text-[#C98A2C]" />
            <span className="font-meta text-[11px] uppercase tracking-[0.2em] text-[#EDE6D6]/70">
              Open to new opportunities
            </span>
          </div>

          <h1
            className={`font-display text-5xl leading-[1.05] text-[#EDE6D6] md:text-7xl ${
              mounted ? "rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            Hi, I&rsquo;m{" "}
            <span className="italic text-[#C98A2C]">Vishal Kumar</span>
          </h1>

          <p
            className={`font-body mt-5 flex items-center text-xl text-[#EDE6D6]/70 md:text-2xl ${
              mounted ? "rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.28s" }}
          >
            Full-Stack Developer
            <span className="mx-3 text-[#7C9885]">&middot;</span>
            Problem Solver
            <span/>
          </p>

          <p
            className={`font-body mt-6 max-w-md text-[15px] leading-relaxed text-[#EDE6D6]/50 ${
              mounted ? "rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            I design and build products end-to-end — from database schema to
            perfect interfaces — with a focus on clarity, speed, and
            craft.
          </p>

          <div
            className={`mt-9 flex flex-wrap items-center gap-4 ${
              mounted ? "rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.52s" }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C98A2C] px-6 py-3 font-meta text-xs uppercase tracking-[0.15em] text-[#14191B] transition-transform duration-300 hover:-translate-y-0.5"
            >
              See my work
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="font-meta rounded-full border border-[#EDE6D6]/25 px-6 py-3 text-xs uppercase tracking-[0.15em] text-[#EDE6D6] transition-colors duration-300 hover:border-[#EDE6D6]/60"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div
          className={`relative mx-auto w-full max-w-sm ${
            mounted ? "rise" : "opacity-0"
          }`}
          style={{ animationDelay: "0.25s" }}
        >
          {/* drifting ink blob backdrop */}
          <div
            className="ink-blob absolute -inset-6 -z-10 rounded-[40%_60%_55%_45%/45%_40%_60%_55%] bg-[#C98A2C]/20 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="ink-blob absolute -inset-10 -z-10 rounded-full bg-[#7C9885]/10 blur-3xl"
            style={{ animationDelay: "-6s" }}
            aria-hidden="true"
          />

          <div
            ref={frameRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="photo-frame relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[#EDE6D6]/15 bg-[#EDE6D6]/5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]"
            style={{
              transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            }}
          >
            {/* Placeholder — replace with your real photo */}
            <div className="photo-placeholder flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EDE6D6]/10 to-transparent">
              <span className="font-display text-6xl italic text-[#EDE6D6]/30">
                VK
              </span>
              <span className="font-meta text-[10px] uppercase tracking-[0.2em] text-[#EDE6D6]/30">
                swap with your-photo.jpg
              </span>
            </div>
            {/* <img src="/your-photo.jpg" alt="Aanya Rao" className="h-full w-full object-cover" /> */}
          </div>

        
        </div>
      </div>
    </section>
  );
}