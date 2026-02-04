
import React from 'react';

interface LandingProps {
  onEnter: () => void;
}

const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            alt="Molloy Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXuRE-jlVSN4vYsL5QeEixp-IgsWCS1r_rHQsIUwjuF7eFh-qRXaOcmtzxfzFULYdnkA_DCIb6gwlIRQitnyXJr7A-VurM89KCcm7u5frZBwNM0KcbWvMiyJaxzMQTbR-mAZ9I40bBnN-Gf4Sg4ZY5GK_2KVn2oJFIQVWDRkaLx4e4q67Q5M5PHW7u_KQyfhm8j_qDIOLWmDrOw4aNFHBCEpzBxqaomcpRgb_8V7Wlr4FvfTN-PCdR0oizR8SBOr62wFB6OOwWCoCD"
          />
          <span className="display-font text-xl font-bold text-primary tracking-tight">STEM PLC</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#about" className="hover:text-primary transition-colors">About Molloy</a>
          <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
          <button 
            onClick={onEnter}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            Enter Platform
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-10 blur-3xl pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full"></div>
          <div className="absolute bottom-20 right-60 w-80 h-80 bg-secondary rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Official Molloy University PLC
            </span>
            <h1 className="display-font text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-slate-900">
              Empowering the <br/>
              <span className="text-primary italic">Future</span> of STEM <br/>
              Classrooms
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A vibrant community for K-12 educators to collaborate on innovative curriculum, 
              share cutting-edge materials, and lead the charge in technical education.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onEnter}
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-lg font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                Join the Community
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                <span className="text-slate-900 font-bold">500+</span> Educators Active Today
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200" 
                alt="STEM Classroom" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-white text-lg font-medium italic mb-2">"This community transformed how I teach robotics to my middle schoolers."</p>
                <p className="text-white/80 text-sm font-bold">— Sarah Williams, STEM Educator</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="display-font text-5xl font-bold mb-6 text-slate-900">Built for Educators, by Educators</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Everything you need to scale your STEM curriculum and find peer support in one centralized location.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">forum</span>
            </div>
            <h3 className="display-font text-2xl font-bold mb-4">Deep Discussions</h3>
            <p className="text-slate-500 leading-relaxed">
              Connect with fellow educators across NY to solve classroom challenges and discuss pedagogy in real-time.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <h3 className="display-font text-2xl font-bold mb-4">Resource Repository</h3>
            <p className="text-slate-500 leading-relaxed">
              Access thousands of peer-reviewed lesson plans, lab guides, and technical demos curated for K-12.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">auto_graph</span>
            </div>
            <h3 className="display-font text-2xl font-bold mb-4">Case Studies</h3>
            <p className="text-slate-500 leading-relaxed">
              Learn from proven implementations of STEM programs with detailed outcomes and methodology reports.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-primary overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          
          <div className="relative z-10 px-8 py-20 md:p-24 text-center">
            <h2 className="display-font text-5xl md:text-7xl font-bold text-white mb-8">Ready to Innovate?</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
              Join the Molloy STEM PLC today and gain access to a network of visionary educators shaping the future.
            </p>
            <button 
              onClick={onEnter}
              className="px-12 py-5 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:bg-slate-50 hover:scale-105 transition-all"
            >
              Enter the Platform
            </button>
            
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-16">
              <div>
                <p className="text-4xl font-bold text-white mb-1">12k+</p>
                <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Resources</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">45</p>
                <p className="text-white/60 text-sm uppercase tracking-widest font-bold">School Districts</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Collaborative</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">24/7</p>
                <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Peer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
             <img 
              alt="Molloy Logo" 
              className="h-8 w-auto grayscale opacity-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXuRE-jlVSN4vYsL5QeEixp-IgsWCS1r_rHQsIUwjuF7eFh-qRXaOcmtzxfzFULYdnkA_DCIb6gwlIRQitnyXJr7A-VurM89KCcm7u5frZBwNM0KcbWvMiyJaxzMQTbR-mAZ9I40bBnN-Gf4Sg4ZY5GK_2KVn2oJFIQVWDRkaLx4e4q67Q5M5PHW7u_KQyfhm8j_qDIOLWmDrOw4aNFHBCEpzBxqaomcpRgb_8V7Wlr4FvfTN-PCdR0oizR8SBOr62wFB6OOwWCoCD"
            />
            <p className="text-sm text-slate-400 font-medium">© 2024 Molloy University. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
