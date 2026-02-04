
import React from 'react';
import { Resource } from '../types';

const resources: Resource[] = [
  {
    id: '1',
    title: 'Solar Cooking for Beginners',
    type: 'Lesson Plan',
    grade: 'K-5',
    description: 'A hands-on guide to building cardboard solar ovens...',
    image: 'https://picsum.photos/seed/solar/400/225',
    rating: 4.8,
    reviews: 12,
  },
  {
    id: '2',
    title: 'Arduino Sensor Basics',
    type: 'Video',
    grade: '6-8',
    description: 'Complete video walk-through of ultrasonic sensors...',
    image: 'https://picsum.photos/seed/arduino/400/225',
    rating: 4.9,
    reviews: 45,
  },
  {
    id: '3',
    title: 'Calculus in the Real World',
    type: 'PDF',
    grade: '9-12',
    description: 'Problem set based on structural engineering...',
    image: 'https://picsum.photos/seed/math/400/225',
    rating: 4.7,
    reviews: 8,
  },
  {
    id: '4',
    title: 'Optics & Light Diffraction',
    type: 'Lab Guide',
    grade: '9-12',
    description: 'Advanced physics lab setup for high schoolers...',
    image: 'https://picsum.photos/seed/physics/400/225',
    rating: 5.0,
    reviews: 3,
  },
];

const Materials: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-50 dark:bg-slate-950">
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="display-font text-4xl font-bold text-slate-900 dark:text-white mb-2">Shared STEM Materials</h1>
          <p className="text-slate-500 dark:text-slate-400">Discover and contribute educational resources within the Molloy community.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold flex items-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <span className="material-symbols-outlined mr-2">upload_file</span>
          Upload Material
        </button>
      </header>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input 
              className="block w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" 
              placeholder="Search resources..." 
              type="text"
            />
          </div>
          <div className="lg:col-span-3 flex flex-wrap gap-4">
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 focus:ring-primary">
              <option>Grade Level (All)</option>
              <option>K-5 Elementary</option>
              <option>6-8 Middle School</option>
              <option>9-12 High School</option>
            </select>
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 focus:ring-primary">
              <option>Subject (All)</option>
              <option>Physics</option>
              <option>Robotics</option>
              <option>Computer Science</option>
            </select>
            <button className="ml-auto text-sm font-medium text-slate-500 hover:text-primary flex items-center">
              <span className="material-symbols-outlined text-sm mr-1">restart_alt</span>
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {resources.map((res) => (
          <div key={res.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="aspect-video relative overflow-hidden">
              <img 
                alt={res.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={res.image}
              />
              <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded text-primary uppercase">{res.grade}</span>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm shadow-lg">Preview</button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">{res.type === 'Video' ? 'play_circle' : res.type === 'PDF' ? 'picture_as_pdf' : 'description'}</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{res.type}</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1 line-clamp-1">{res.title}</h3>
              <p className="text-xs text-slate-500 mb-4">{res.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center text-secondary">
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="text-xs font-bold ml-1">{res.rating}</span>
                  <span className="text-[10px] text-slate-400 ml-1 font-normal">({res.reviews})</span>
                </div>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bookmark_add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
