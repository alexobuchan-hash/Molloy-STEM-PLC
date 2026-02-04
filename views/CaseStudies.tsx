
import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto flex bg-white dark:bg-slate-900">
      <div className="flex-1 max-w-5xl mx-auto p-8">
        <header className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Academic Excellence</span>
            <span className="text-xs text-slate-400">Total Case Studies: 142</span>
          </div>
          <h1 className="display-font text-5xl font-bold text-slate-900 dark:text-white mb-4">STEM Education Case Studies</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Explore successful STEM implementations from K-12 classrooms within our community. Discover methodologies, key takeaways, and measurable outcomes to inspire your next lesson.
          </p>
        </header>

        <div className="sticky top-0 z-20 bg-white dark:bg-slate-900 pb-6">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input 
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none text-base" 
                placeholder="Search by topic, grade level, or school..." 
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase mr-2">Filters:</span>
              <button className="px-4 py-2 bg-primary text-white rounded-full text-xs font-semibold">All Subjects</button>
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors">Science</button>
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors">Technology</button>
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors">Engineering</button>
            </div>
          </div>
        </div>

        <div className="space-y-8 mt-4">
          <article className="bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group">
            <div className="md:flex">
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden relative">
                <img 
                  alt="Solar Power Project" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://picsum.photos/seed/case1/600/800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">High School</span>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 px-3 py-1 rounded-full">Physics</span>
                    <span className="text-xs font-medium text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 px-3 py-1 rounded-full">Environment</span>
                  </div>
                  <span className="text-xs text-slate-400">Published Oct 12, 2023</span>
                </div>
                <h3 className="display-font text-3xl font-bold mb-3 dark:text-white group-hover:text-primary transition-colors">Solar-Powered Urban Irrigation: A Community Solution</h3>
                <p className="text-slate-500 text-sm mb-6 flex items-center italic">
                  <span className="material-symbols-outlined text-base mr-1">person</span>
                  Lead by Sarah Williams, Molloy High School STEM Lab
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2 flex items-center">
                      <span className="material-symbols-outlined text-sm mr-2 text-primary">biotech</span>
                      Methodology
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      Students used CAD software to design efficient drip systems, then prototyped Arduino-based controllers powered by small solar arrays to automate watering based on soil moisture data.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2 flex items-center">
                      <span className="material-symbols-outlined text-sm mr-2 text-primary">emoji_events</span>
                      Outcomes
                    </h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li className="flex items-start"><span className="text-secondary mr-2">•</span> 30% reduction in water waste</li>
                      <li className="flex items-start"><span className="text-secondary mr-2">•</span> 100% student certification in CAD basics</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Key Takeaway</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Interdisciplinary data literacy</span>
                  </div>
                  <button className="flex items-center text-primary dark:text-secondary font-bold text-sm hover:translate-x-1 transition-transform">
                    Read Full Case Study <span className="material-symbols-outlined ml-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
