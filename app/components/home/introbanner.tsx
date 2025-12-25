import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function IntroBanner() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* LEFT CONTENT: Typography & CTA */}
                <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                    <div className="space-y-4">
                        <h2 className="text-blue-400 font-mono tracking-widest text-sm uppercase font-bold">
                            AWS Certified Solutions Architect | Senior Software Engineer
                        </h2>
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1]">
                            From Blueprints to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Breakpoints 
                            </span> <br /> <div className="text-xl md:text-3xl font-black text-white leading-[1.1]">Where Logic Meets Layout.</div>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                            From Mechanical roots to Cloud Architecture. I'm <span className="text-white font-medium">Dasari Surya Ratnakara Naidu</span>, 
                            a versatile engineer dedicated to building automated, data-driven solutions for the modern web.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-600/25">
                            View My Work <ArrowRight size={18} />
                        </button>
                        <div className="flex items-center gap-3 px-2">
                            <a href="https://github.com/suryaratna999" className="p-3 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-white transition-all">
                                <Github size={20}/>
                            </a>
                            <a href="https://linkedin.com/in/dasari-surya-ratnakara-naidu" className="p-3 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT: Profile Image */}
                <div className="relative flex justify-center items-center animate-in fade-in slide-in-from-right duration-1000">
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-110 animate-pulse" />
                    
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                        {/* Placeholder for your edited image */}
                        <img 
                            src="/DSRN2.png" 
                            alt="D.S.R. Naidu"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        
                        {/* Subtle Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 md:right-10 bg-slate-900/80 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
                        <p className="text-white font-bold text-2xl">3+</p>
                        <p className="text-slate-400 text-xs uppercase tracking-tighter">Years of Innovation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}