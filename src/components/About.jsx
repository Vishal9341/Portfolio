import React from "react";
import { User, Award, Code, Compass, FileText, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0f17] py-24 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 backdrop-blur-md">
            <User size={14} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
              About Me
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Passionate About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
              Clean Code & Design
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base">
            Get to know my journey, architectural principles, and what drives my development workflow.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Full-Stack Architecture</h3>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                  Building scalable backend APIs coupled with responsive, pixel-perfect frontend UIs.
                </p>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Compass size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI & Web Integration</h3>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                  Integrating OpenAI, LLMs, prompt engineering, and intelligent features into modern web apps.
                </p>
              </div>
            </div>
      
          </div>
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-6">
              Engineering with passion & precision
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {portfolioData.personal.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-300">
                <CheckCircle2 size={16} className="text-violet-400" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-rose-300">
                <CheckCircle2 size={16} className="text-rose-400" />
                <span>Performance & SEO Optimized</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-xs font-mono uppercase tracking-wider font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
