"use client"


import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, FileText, Code2, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    

    const NavElements = [
        { name: "Home", href: "#home", icon: <Home size={16} /> },
        { name: "About", href: "#about", icon: <User size={16} /> },
        { name: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
    ];

    // Note: resume file in `public/` is `DSRN_Resume.pdf` (underscore)
    // We'll link directly to `/DSRN_Resume.pdf` so the browser opens the PDF.

    return (
        <div className="w-full pt-6 px-4 relative font-sans">
            <nav className="flex items-center justify-between border border-white/10 px-6 py-3 rounded-full text-white text-sm bg-black/40 backdrop-blur-xl max-w-7xl mx-auto shadow-2xl">
                
                {/* 1. LEFT: Styled Name with Gradient & Icon */}
                <div className="flex-1 flex justify-start items-center gap-2">
                    <div className="p-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg text-white shadow-lg shadow-blue-500/20">
                        <Code2 size={20} />
                    </div>
                    <a href="/" className="group flex flex-col">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 font-black tracking-tight text-lg leading-tight group-hover:from-cyan-400 group-hover:to-blue-600 transition-all duration-500">
                            D.S.R. NAIDU
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold group-hover:text-blue-400 transition-colors">
                            Portfolio 2025
                        </span>
                    </a>
                </div>

                {/* 2. CENTER: Animated Links (Desktop) */}
                <div className="hidden md:flex items-center gap-2">
                    {NavElements.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300 group relative overflow-hidden h-9"
                        >
                            <div className="flex items-center gap-2 group-hover:-translate-y-10 transition-transform duration-500">
                                <span className="text-slate-400">{item.icon}</span>
                                <span className="text-slate-200 font-medium">{item.name}</span>
                            </div>
                            <div className="flex items-center gap-2 absolute top-10 left-4 group-hover:-translate-y-10 transition-transform duration-500 text-blue-400">
                                {item.icon}
                                <span className="font-bold">{item.name}</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* 3. RIGHT: Action Button with Glow */}
                <div className="hidden md:flex flex-1 justify-end items-center">
                    <a href="/DSRN_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95">
                        <FileText size={14} />
                        Resume
                        {/* Subtle Background Glow */}
                        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-24 left-4 right-4 bg-black/90 border border-white/10 p-4 rounded-3xl flex flex-col gap-2 md:hidden z-50 animate-in fade-in zoom-in duration-300">
                    {NavElements.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 text-slate-300 hover:text-white hover:bg-white/5 p-4 rounded-2xl transition-all"
                        >
                            {item.icon}
                            <span className="text-lg font-medium">{item.name}</span>
                        </a>
                    ))}
                    <a href="/DSRN_Resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/20">
                        <FileText size={18} /> Resume
                    </a>
                </div>
            )}
        </div>
    );
}