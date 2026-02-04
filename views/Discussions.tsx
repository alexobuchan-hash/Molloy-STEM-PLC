
import React from 'react';
import { DiscussionThread } from '../types';

const threads: DiscussionThread[] = [
  {
    id: '1',
    title: 'Integrating Python with Micro:bit for 8th Grade Science',
    author: 'Sarah Williams',
    category: 'Robotics',
    replies: 18,
    latestActivity: '2 hours ago',
    lastReplyBy: 'Mark T.',
    postedTime: '3 days ago',
  },
  {
    id: '2',
    title: 'Visualizing Projectile Motion with Slow-Mo Video Analysis',
    author: 'Dr. David Chen',
    category: 'Physics',
    replies: 42,
    latestActivity: '15 mins ago',
    lastReplyBy: 'Elena R.',
    postedTime: '1 week ago',
  },
  {
    id: '3',
    title: 'NGSS Alignment for High School Engineering Design Electives',
    author: 'Elena Rodriguez',
    category: 'Curriculum Design',
    replies: 7,
    latestActivity: 'Yesterday',
    lastReplyBy: 'Dr. Jane Doe',
    postedTime: '2 days ago',
  },
  {
    id: '4',
    title: 'Using Large Language Models to Generate Lab Variations',
    author: 'Kevin Park',
    category: 'AI in K-12',
    replies: 12,
    latestActivity: '1 hour ago',
    lastReplyBy: 'Sarah W.',
    postedTime: '5 hours ago',
  },
];

const Discussions: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="display-font text-4xl font-bold text-slate-900 dark:text-white mb-2">Teacher Discussions</h1>
          <p className="text-slate-500 dark:text-slate-400">Connect with peers, share curriculum, and solve classroom challenges together.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 flex items-center transition-all">
          <span className="material-symbols-outlined mr-2">add_comment</span>
          Start New Discussion
        </button>
      </header>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">All Threads</button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium transition-colors">Physics</button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium transition-colors">Robotics</button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium transition-colors">Curriculum Design</button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium transition-colors">AI in K-12</button>
        
        <div className="ml-auto relative w-full md:w-64">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            <span className="material-symbols-outlined text-sm">search</span>
          </span>
          <input 
            className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary" 
            placeholder="Search threads..." 
            type="text"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <div className="col-span-6">Thread Topic</div>
          <div className="col-span-2 text-center">Category</div>
          <div className="col-span-1 text-center">Replies</div>
          <div className="col-span-3 text-right pr-4">Latest Activity</div>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {threads.map((thread) => (
            <div key={thread.id} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
              <div className="col-span-6 flex items-start space-x-4">
                <img 
                  alt="User" 
                  className="w-10 h-10 rounded-full object-cover" 
                  src={`https://picsum.photos/seed/${thread.author}/100/100`}
                />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-1">{thread.title}</h3>
                  <p className="text-sm text-slate-500">By <span className="text-slate-700 dark:text-slate-300 font-medium">{thread.author}</span> • Posted {thread.postedTime}</p>
                </div>
              </div>
              <div className="col-span-2 flex justify-center">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{thread.category}</span>
              </div>
              <div className="col-span-1 text-center font-semibold text-slate-700 dark:text-slate-300">{thread.replies}</div>
              <div className="col-span-3 text-right pr-4">
                <p className="text-sm font-medium dark:text-slate-200">Last reply by {thread.lastReplyBy}</p>
                <p className="text-xs text-slate-400">{thread.latestActivity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 italic">Showing 1-4 of 245 active discussions</p>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg text-sm font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm dark:text-slate-300">2</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm dark:text-slate-300">3</button>
            <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
