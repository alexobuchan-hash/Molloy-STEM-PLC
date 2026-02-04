
import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="flex-1 max-w-4xl p-8 border-r border-slate-200 dark:border-slate-800 overflow-y-auto h-full">
      <header className="mb-8">
        <h1 className="display-font text-4xl font-bold text-slate-900 dark:text-white mb-2">Welcome back, Jane</h1>
        <p className="text-slate-500 dark:text-slate-400">See what's happening in your K-12 STEM community today.</p>
      </header>

      <div className="relative mb-8">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
          <span className="material-symbols-outlined">search</span>
        </span>
        <input 
          className="block w-full pl-10 pr-3 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm" 
          placeholder="Search discussions, case studies, or resources..." 
          type="text"
        />
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <button className="text-primary dark:text-secondary text-sm font-medium hover:underline">View All</button>
        </div>

        <article className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <img 
              alt="Avatar" 
              className="w-10 h-10 rounded-full object-cover" 
              src="https://picsum.photos/seed/sarah/100/100"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold">Sarah Williams <span className="text-slate-400 font-normal ml-2">posted in</span> <span className="text-primary dark:text-secondary font-semibold">Tech Demos</span></h4>
                <span className="text-xs text-slate-400">2h ago</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Just finished testing a new Arduino-based weather station project with my 7th graders. The results were incredible! Check out the sensor calibration script I used.
              </p>
              <div className="flex items-center space-x-6 text-slate-500 dark:text-slate-400">
                <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">favorite</span>
                  <span className="text-sm">24</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm text-[18px]">chat_bubble</span>
                  <span className="text-sm">8</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">share</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        <article className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold">System Update <span className="text-slate-400 font-normal ml-2">in</span> <span className="text-primary dark:text-secondary font-semibold">Hackathons</span></h4>
                <span className="text-xs text-slate-400">5h ago</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl mb-4 border-l-4 border-secondary">
                <h5 className="font-semibold text-sm mb-1 text-slate-900 dark:text-white">Upcoming: STEM Innovation Hackathon 2024</h5>
                <p className="text-sm text-slate-600 dark:text-slate-300">Registration is now open for the annual Molloy University K-12 teacher hackathon. Win grants for your classroom!</p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">Register Now</button>
            </div>
          </div>
        </article>

        <div className="pt-4">
          <h3 className="text-lg font-bold mb-4">Trending Discussions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary p-4 rounded-2xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Highly Discussed</span>
                <h4 className="font-bold text-lg mt-1 mb-3">AI in High School Physics Labs</h4>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-primary"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-primary"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-primary"></div>
                  </div>
                  <span className="text-xs">+12 teachers contributing</span>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 group-hover:scale-110 transition-transform">insights</span>
            </div>
            <div className="bg-secondary p-4 rounded-2xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">New Resource</span>
                <h4 className="font-bold text-lg mt-1 mb-3">Sustainable Energy Curriculum Pack</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Grades 9-12</span>
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Physics</span>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 group-hover:scale-110 transition-transform">auto_stories</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
