import React from "react";
import { Layout, Server, Sparkles, Cpu, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const categories = portfolioData.skillsCategories;

  const getCategoryHeader = (id) => {
    switch (id) {
      case "frontend":
        return {
          icon: <Layout className="text-cyan-400" size={24} />,
          badgeColor: "border-cyan-500/30 bg-cyan-950/40 text-cyan-300",
          glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]",
          titleGradient: "from-cyan-400 to-blue-400"
        };
      case "backend":
        return {
          icon: <Server className="text-violet-400" size={24} />,
          badgeColor: "border-violet-500/30 bg-violet-950/40 text-violet-300",
          glowColor: "group-hover:border-violet-500/40 group-hover:shadow-[0_0_25px_rgba(138,43,226,0.15)]",
          titleGradient: "from-violet-400 to-purple-400"
        };
      case "ai":
        return {
          icon: <Sparkles className="text-rose-400" size={24} />,
          badgeColor: "border-rose-500/30 bg-rose-950/40 text-rose-300",
          glowColor: "group-hover:border-rose-500/40 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]",
          titleGradient: "from-rose-400 to-amber-400"
        };
      default:
        return {
          icon: <Cpu className="text-cyan-400" size={24} />,
          badgeColor: "border-cyan-500/30 bg-cyan-950/40 text-cyan-300",
          glowColor: "group-hover:border-cyan-500/40",
          titleGradient: "from-cyan-400 to-violet-400"
        };
    }
  };

  return (
    <section id="skills" className="relative w-full bg-[#0b0f17] py-24 z-10">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 backdrop-blur-md">
            <Cpu size={14} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
              Technical Stack
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Specialized Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
              Stack & Domains
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base">
            Structured overview of my technical capabilities across Frontend Engineering, Backend Systems, and Artificial Intelligence.
          </p>
        </div>

        {/* 3 Professional Category Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {categories.map((cat) => {
            const header = getCategoryHeader(cat.id);
            return (
              <div
                key={cat.id}
                className={`glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-300 ${header.glowColor}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 border border-white/10 shadow-inner">
                        {header.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${header.titleGradient}`}>
                          {cat.name}
                        </h3>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                          Domain Stack
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills List Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skillName, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 transition-colors group-hover:border-white/20 group-hover:bg-white/10"
                      >
                        <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                        <span className="text-xs font-semibold text-gray-200">
                          {skillName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-gray-500">
                  <span>{cat.skills.length} Technologies</span>
                  <span className="text-cyan-400">Full-Stack Core</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
