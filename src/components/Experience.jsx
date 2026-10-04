import React from "react";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#0b0f17] py-24 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 backdrop-blur-md">
            <Briefcase size={14} className="text-emerald-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
              Career & Journey
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">
              Experience
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base">
            A timeline of my professional roles, engineering contributions, and key project milestones.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-emerald-500 sm:left-1/2 sm:-translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)] z-10">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto"
                    }`}
                  >
                    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <div className="mt-1 flex items-center gap-2 text-sm text-gray-300 font-medium">
                        <Building2 size={16} className="text-violet-400" />
                        <span>{exp.company}</span>
                      </div>

                      <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tech badges */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
