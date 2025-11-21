import React from 'react';
import { CheckCircle } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const AboutSection: React.FC = () => {
  const features = [
    "资深 AI 专家授课，理论与实战并重",
    "独家企业级实训案例库",
    "小班制教学，一对一辅导",
    "终身社群服务，持续技术更新"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-10 lg:mb-0">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-50 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/600/800?random=50" 
              alt="About Us" 
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block border-l-4 border-red-600">
              <p className="text-gray-600 font-medium italic">
                "致力于将复杂的 AI 技术转化为每个人都能掌握的生产力工具。"
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">关于我们</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              {COMPANY_NAME}
            </h3>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">
              博昉翼教育咨询成立于美丽的鹭岛厦门，是一家专注于人工智能领域的教育咨询机构。我们汇聚了来自国内外顶尖科技公司的技术专家，旨在为企业和个人提供最专业、最前沿的 AI 落地培训服务。
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              我们的愿景是消除技术鸿沟，让每一个职场人都能享受 AI 带来的效率红利。通过系统化的课程设计和沉浸式的实战演练，我们已帮助数百家企业完成了智能化转型。
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;