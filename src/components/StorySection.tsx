import { useState } from 'react';
import { BRAND_PHILOSOPHY } from '../data';
import { Scale, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function StorySection() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <Scale className="w-5 h-5 text-wood-gold" />,
    <ShieldCheck className="w-5 h-5 text-wood-gold" />,
    <HeartHandshake className="w-5 h-5 text-wood-gold" />
  ];

  return (
    <div id="story-component-container" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Storyboard, Description, & Philosophical points */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        <span className="text-xs uppercase tracking-[0.25em] text-wood-gold font-bold">
          Filosofi Nama Antteak
        </span>
        
        <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-wood-dark mt-3 leading-tight">
          {BRAND_PHILOSOPHY.title}
        </h3>
        
        <p className="text-sm font-light text-wood-medium/95 mt-6 leading-relaxed">
          {BRAND_PHILOSOPHY.text1}
        </p>

        <p className="text-sm font-light text-wood-medium/85 mt-4 leading-relaxed">
          {BRAND_PHILOSOPHY.text2}
        </p>

        {/* Interactive Points columns */}
        <div className="mt-8 flex flex-col gap-4">
          {BRAND_PHILOSOPHY.points.map((point, idx) => (
            <div
              key={point.title}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl border transition-all duration-350 cursor-pointer flex gap-4 ${
                activeTab === idx
                  ? 'bg-champagne border-wood-gold/40 shadow-md'
                  : 'bg-transparent border-transparent hover:bg-champagne/40'
              }`}
            >
              <div className={`p-3 rounded-xl shrink-0 h-fit ${
                activeTab === idx ? 'bg-wood-gold text-warm-beige' : 'bg-champagne text-wood-gold'
              }`}>
                {icons[idx]}
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-wood-dark">
                  {point.title}
                </h4>
                <p className="text-xs font-light text-wood-medium/85 mt-1 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Beautiful custom architectural illustration representing Semut & Jati structural engineering */}
      <div className="lg:col-span-6 relative flex items-center justify-center">
        
        {/* Background ambient gold aura */}
        <div className="absolute w-72 h-72 rounded-full bg-wood-gold/5 blur-3xl -z-10"></div>
        
        <div className="w-full max-w-md aspect-square bg-gradient-to-br from-champagne/70 to-champagne/35 border border-sand/20 rounded-[36px] p-8 md:p-12 shadow-inner flex flex-col justify-between overflow-hidden">
          
          {/* Schematic header */}
          <div className="flex justify-between items-center pb-4 border-b border-sand/20">
            <span className="text-[9px] font-mono tracking-widest text-wood-medium/60 uppercase">
              Schematic // Micro-Joinery V.1
            </span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-wood-gold"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-wood-medium/40"></span>
            </div>
          </div>

          {/* Golden animated high-contrast structural ant logo wireframe */}
          <div className="my-10 flex items-center justify-center relative py-6">
            <svg
              width="180"
              height="180"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-wood-gold drop-shadow-xl animate-pulse"
            >
              {/* Abdomen structure */}
              <path
                d="M 16 50 C 16 38, 26 30, 42 45 C 45 48, 45 52, 42 55 C 26 70, 16 62, 16 50 Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Abdomen interior joint line highlights */}
              <line x1="22" y1="48" x2="33" y2="48" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
              <line x1="20" y1="52" x2="35" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />

              {/* Thorax */}
              <ellipse
                cx="54"
                cy="50"
                rx="9"
                ry="6"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle cx="54" cy="50" r="1.5" fill="currentColor" />

              {/* Head */}
              <circle
                cx="74"
                cy="50"
                r="6.5"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              
              {/* Connection nodes representing joint pegs */}
              <circle cx="43.5" cy="50" r="3" fill="var(--color-warm-beige)" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="65" cy="50" r="3" fill="var(--color-warm-beige)" stroke="currentColor" strokeWidth="1.5" />

              {/* Legs configured as joinery arches */}
              <path d="M 48 46 Q 38 28 24 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M 48 54 Q 38 72 24 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              
              <path d="M 54 44 Q 54 22 42 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M 54 56 Q 54 78 42 84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              
              <path d="M 58 46 Q 66 26 78 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M 58 54 Q 66 74 78 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

              {/* Antennae */}
              <path d="M 80 46 Q 88 38 94 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 80 54 Q 88 62 94 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Micro details overlay */}
            <div className="absolute top-0 right-2 text-[8px] font-mono text-wood-medium/60 flex flex-col items-end gap-1">
              <span>MODEL ID: AT.ANT.1</span>
              <span>ANGLE: 45° DIAGONAL</span>
            </div>
          </div>

          {/* Schematic Footer metrics */}
          <div className="bg-warm-beige/80 backdrop-blur-md p-4 rounded-2xl border border-sand/40 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[10px] font-serif font-bold text-wood-dark leading-none">
                Traditional Wood Joint
              </span>
              <span className="text-[8px] font-mono uppercase text-wood-medium/55 tracking-wider mt-1">
                Mortise & Tenon Fitting
              </span>
            </div>
            
            <span className="text-[10px] font-bold text-wood-gold bg-champagne py-1 px-3 rounded-full uppercase tracking-wider">
              100% Rayap Free
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
