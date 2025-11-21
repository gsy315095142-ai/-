import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-red-600 overflow-hidden pt-24 pb-16 sm:pb-24 lg:pb-32 min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
         </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-white text-xs font-semibold tracking-wide uppercase mb-6 border border-red-400">
            <Zap size={14} className="mr-1" /> 引领 AI 教育新时代
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 leading-tight">
            掌握 AI 核心力量 <br />
            <span className="text-red-200">重塑职业未来</span>
          </h1>
          <p className="mt-4 text-xl text-red-100 max-w-lg mx-auto lg:mx-0 mb-8">
            厦门博昉翼教育咨询有限公司致力于为个人和企业提供最前沿的人工智能培训。从生成式 AI 到大模型开发，我们助您在智能时代抢占先机。
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#courses"
              className="px-8 py-4 border border-transparent text-base font-medium rounded-xl text-red-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg shadow-lg transition-all transform hover:-translate-y-1"
            >
              探索课程
            </a>
            <a
              href="#advisor"
              className="px-8 py-4 border border-white text-base font-medium rounded-xl text-white hover:bg-red-700 md:py-4 md:text-lg transition-all flex items-center justify-center"
            >
              AI 智能咨询 <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 relative z-10">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-all duration-500">
            <img
              src="https://picsum.photos/800/600?random=99"
              alt="AI Training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="font-bold text-lg">实战驱动教学</p>
              <p className="text-sm opacity-80">100% 真实商业案例</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;