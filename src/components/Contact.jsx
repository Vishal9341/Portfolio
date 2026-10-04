import { useState } from "react";
import { Mail, Send, CheckCircle2, MessageSquare, MapPin, Copy, Check } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0f17] py-24 z-10">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/30 px-4 py-1.5 backdrop-blur-md">
            <MessageSquare size={14} className="text-rose-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-rose-300">
              Get In Touch
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-400">
              Extraordinary
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base">
            Have a project in mind, an inquiry, or want to say hello? Send a message and let's start a conversation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left: Contact Info & Copy Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card glass-card-hover rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail size={22} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Email Me</span>
                    <div className="mt-1 flex items-center gap-2">
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {portfolioData.personal.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-cyan-300 transition-colors"
                        title="Copy Email"
                      >
                        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Location</span>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-gray-950/60 p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-xs text-gray-300 font-semibold">
                    Current Availability
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                  Open for full-time roles, freelance projects, and technical consultations.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphism Interactive Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4 animate-bounce">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="mt-2 text-sm text-gray-400 max-w-md">
                  Thank you for reaching out. I've received your message and will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-gray-950/80 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-gray-950/80 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full rounded-xl border border-white/10 bg-gray-950/80 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full rounded-xl border border-white/10 bg-gray-950/80 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-rose-500 px-8 py-4 text-xs font-mono uppercase tracking-wider font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] hover:shadow-cyan-500/40"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
