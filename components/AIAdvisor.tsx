import React, { useState } from 'react';
import { Send, Bot, Sparkles, Loader2 } from 'lucide-react';
import { getCourseRecommendation } from '../services/geminiService';
import { AdvisorState } from '../types';
import ReactMarkdown from 'react-markdown';

const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [state, setState] = useState<AdvisorState>(AdvisorState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setState(AdvisorState.LOADING);
    setResponse('');

    const result = await getCourseRecommendation(query);
    setResponse(result);
    setState(AdvisorState.SUCCESS);
  };

  return (
    <section id="advisor" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-full mr-4">
                <Bot className="text-white w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white">智能课程顾问</h2>
            </div>
            
            <p className="text-center text-red-100 mb-8 max-w-2xl mx-auto">
              不确定哪门课程适合您？告诉 AI 您的职业背景、兴趣或想解决的问题，Gemini 大模型将为您量身定制学习方案。
            </p>

            {/* Chat Interface */}
            <div className="bg-white rounded-2xl shadow-inner min-h-[300px] flex flex-col">
              
              {/* Output Area */}
              <div className="flex-1 p-6 overflow-y-auto max-h-[400px]">
                {state === AdvisorState.IDLE && (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4 opacity-60">
                    <Sparkles size={48} />
                    <p>请输入您的需求，例如："我是财务人员，想学习用 AI 处理报表"</p>
                  </div>
                )}

                {state === AdvisorState.LOADING && (
                  <div className="flex items-center justify-center h-full text-red-600 space-x-2">
                    <Loader2 className="animate-spin" />
                    <span>AI 正在思考您的最佳学习路径...</span>
                  </div>
                )}

                {state === AdvisorState.SUCCESS && (
                   <div className="prose prose-red max-w-none text-gray-800">
                     <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                       <h4 className="text-red-800 font-bold flex items-center mb-2">
                         <Sparkles size={16} className="mr-2" /> 推荐方案
                       </h4>
                       <ReactMarkdown>{response}</ReactMarkdown>
                     </div>
                   </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="描述您的职业或学习目标..."
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring focus:ring-red-200 focus:outline-none transition-all"
                    disabled={state === AdvisorState.LOADING}
                  />
                  <button
                    type="submit"
                    disabled={state === AdvisorState.LOADING || !query.trim()}
                    className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60 -z-0 pointer-events-none"></div>
    </section>
  );
};

export default AIAdvisor;