
import React from 'react';
import { NavigationItem } from '../types';

interface SidebarProps {
  activeItem: NavigationItem;
  onNavigate: (item: NavigationItem) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onNavigate, isDarkMode, toggleDarkMode }) => {
  const items: { label: NavigationItem; icon: string }[] = [
    { label: 'Overview', icon: 'dashboard' },
    { label: 'Discussions', icon: 'forum' },
    { label: 'Case Studies', icon: 'school' },
    { label: 'Materials', icon: 'folder' },
    { label: 'Tech Demos', icon: 'devices' },
    { label: 'Hackathons', icon: 'terminal' },
    { label: 'Idea League', icon: 'emoji_events' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 h-full">
      <div className="p-6 flex flex-col items-center">
        <img 
          alt="Molloy University STEM PLC Logo" 
          className="h-16 w-auto mb-4" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXuRE-jlVSN4vYsL5QeEixp-IgsWCS1r_rHQsIUwjuF7eFh-qRXaOcmtzxfzFULYdnkA_DCIb6gwlIRQitnyXJr7A-VurM89KCcm7u5frZBwNM0KcbWvMiyJaxzMQTbR-mAZ9I40bBnN-Gf4Sg4ZY5GK_2KVn2oJFIQVWDRkaLx4e4q67Q5M5PHW7u_KQyfhm8j_qDIOLWmDrOw4aNFHBCEpzBxqaomcpRgb_8V7Wlr4FvfTN-PCdR0oizR8SBOr62wFB6OOwWCoCD"
        />
        <h2 className="display-font text-xl font-bold text-primary dark:text-secondary text-center leading-tight">STEM Community</h2>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.label)}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
              activeItem === item.label
                ? 'text-primary bg-primary/5 dark:bg-primary/20 dark:text-secondary border-r-4 border-primary dark:border-secondary'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-symbols-outlined mr-3 text-[20px]">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">JD</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">Dr. Jane Doe</p>
            <p className="text-xs text-slate-500 truncate">STEM Coordinator</p>
          </div>
          <button 
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            onClick={toggleDarkMode}
          >
            <span className="material-symbols-outlined text-sm">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
