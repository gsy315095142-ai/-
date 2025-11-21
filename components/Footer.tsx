import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {COMPANY_NAME.substring(0, 5)}<span className="text-red-500">教育</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              我们专注于前沿人工智能技术的普及与应用培训，致力于帮助企业和个人在 AI 时代构建核心竞争力。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">快速导航</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">网站首页</a></li>
              <li><a href="#courses" className="hover:text-red-400 transition-colors">课程体系</a></li>
              <li><a href="#advisor" className="hover:text-red-400 transition-colors">智能顾问</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">关于我们</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">联系方式</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-red-500 flex-shrink-0 mt-1" />
                <span>福建省厦门市思明区软件园二期观日路</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-red-500 flex-shrink-0" />
                <span>0592-8888888</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-red-500 flex-shrink-0" />
                <span>contact@bofangyi.com</span>
              </li>
              <li className="flex items-center">
                <Globe size={18} className="mr-3 text-red-500 flex-shrink-0" />
                <span>www.bofangyi.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">订阅更新</h4>
            <p className="text-gray-400 text-sm mb-4">获取最新的 AI 行业资讯和课程优惠。</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="请输入您的邮箱" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-700"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                订阅
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. 闽ICP备12345678号
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;