
import React, { useState } from 'react';
import { NavigationItem } from './types';
import Sidebar from './components/Sidebar';
import Overview from './views/Overview';
import Discussions from './views/Discussions';
import CaseStudies from './views/CaseStudies';
import Materials from './views/Materials';
import Landing from './views/Landing';

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState<NavigationItem>('Overview');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleEnterPlatform = () => {
    setShowLanding(false);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'Overview':
        return <Overview />;
      case 'Discussions':
        return <Discussions />;
      case 'Case Studies':
        return <CaseStudies />;
      case 'Materials':
        return <Materials />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="display-font text-4xl font-bold mb-4">{activeItem}</h1>
              <p className="text-slate-500">This section is coming soon.</p>
              <button 
                onClick={() => setActiveItem('Overview')}
                className="mt-6 px-6 py-2 bg-primary text-white rounded-xl"
              >
                Go back to Overview
              </button>
            </div>
          </div>
        );
    }
  };

  const renderRightPanel = () => {
    if (activeItem === 'Overview' || activeItem === 'Discussions') {
      return (
        <aside className="w-80 p-8 hidden xl:block border-l border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 overflow-y-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center dark:text-white">
                <span className="material-symbols-outlined text-secondary mr-2">emoji_events</span>
                Idea League
              </h3>
              <span className="text-xs font-bold bg-secondary/10 text-secondary px-2 py-1 rounded">Phase 1</span>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <p className="text-xs font-semibold text-slate-500 uppercase">Top Contributors</p>
              </div>
              <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                <li className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-secondary">01</span>
                    <div>
                      <p className="text-sm font-semibold dark:text-slate-200">Mark Thompson</p>
                      <p className="text-xs text-slate-400">84 Points</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
                </li>
                <li className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-slate-400">02</span>
                    <div>
                      <p className="text-sm font-semibold dark:text-slate-200">Elena Rodriguez</p>
                      <p className="text-xs text-slate-400">79 Points</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
                </li>
              </ul>
              <div className="p-4">
                <button className="w-full py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">Submit New Idea</button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4 dark:text-white">Quick Links</h3>
              <div className="grid grid-cols-1 gap-2">
                <a className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center hover:border-primary transition-all group" href="#">
                  <span className="material-symbols-outlined text-primary mr-3">help_outline</span>
                  <span className="text-sm font-medium dark:text-slate-300">Community Guidelines</span>
                </a>
                <a className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center hover:border-primary transition-all group" href="#">
                  <span className="material-symbols-outlined text-primary mr-3">support_agent</span>
                  <span className="text-sm font-medium dark:text-slate-300">Contact Moderator</span>
                </a>
              </div>
            </div>
          </div>
        </aside>
      );
    }
    return null;
  };

  if (showLanding) {
    return <Landing onEnter={handleEnterPlatform} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark animate-in fade-in duration-500">
      <Sidebar 
        activeItem={activeItem} 
        onNavigate={setActiveItem} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <main className="flex-1 flex overflow-hidden">
        {renderContent()}
        {renderRightPanel()}
      </main>
    </div>
  );
};

export default App;
