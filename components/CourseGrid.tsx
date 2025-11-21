import React from 'react';
import { COURSES } from '../constants';
import { Clock, BarChart, ChevronRight } from 'lucide-react';

const CourseGrid: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">核心业务</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            体系化 AI 课程解决方案
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            无论您是初学者还是资深开发者，我们都有适合您的进阶路径。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-red-600 uppercase shadow-sm">
                  {course.level}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">
                  {course.description}
                </p>
                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {course.duration}
                  </div>
                  <button className="text-red-600 font-medium hover:underline flex items-center">
                    查看详情 <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;