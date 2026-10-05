import { FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const projects = portfolioData.projects;

  const getAccentGlow = (accent) => {
    switch (accent) {
      case "cyan":
        return "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]";
      case "violet":
        return "hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)]";
      case "rose":
        return "hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]";
      case "emerald":
        return "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]";
      default:
        return "hover:border-cyan-500/50";
    }
  };

  return (
    <section id="projects" className="relative w-full bg-[#0b0f17] py-24 z-10">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 backdrop-blur-md">
            <FolderGit2 size={14} className="text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
              Featured Works
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Projects &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400">
              Case Studies
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base">
            Explore a showcase of production-grade web applications, interactive tools, and innovative projects built with modern technologies.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-card group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 ${getAccentGlow(
                project.accent
              )}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-80" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-gray-950/70 px-3 py-1 font-mono text-[11px] font-medium text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-3 py-1 font-mono text-[11px] font-bold text-gray-950 shadow-md">
                      <Sparkles size={11} />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
                  >
                    <FaGithub size={16} />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold text-cyan-300 transition-all hover:bg-cyan-500 hover:text-gray-950 hover:border-cyan-400 shadow-md hover:shadow-cyan-500/30"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
