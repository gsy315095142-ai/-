import { Course, Testimonial } from './types';

export const COMPANY_NAME = "厦门博昉翼教育咨询有限公司";
export const BRAND_NAME = "博昉翼教育";

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: '生成式 AI 商业落地实战',
    description: '掌握 ChatGPT、Claude 等大模型在企业工作流中的实际应用，提升 500% 工作效率。',
    duration: '4 周',
    level: '入门',
    image: 'https://picsum.photos/800/600?random=1',
    tags: ['ChatGPT', '效率工具', '商业应用']
  },
  {
    id: 'c2',
    title: 'Midjourney & Stable Diffusion 视觉艺术大师班',
    description: '从零开始学习 AI 绘画，掌握提示词工程与 ControlNet 高级控图技术，适合设计师与创意工作者。',
    duration: '6 周',
    level: '进阶',
    image: 'https://picsum.photos/800/600?random=2',
    tags: ['AI绘画', '设计', '创意']
  },
  {
    id: 'c3',
    title: 'Python 大模型应用开发 (LLM Ops)',
    description: '基于 LangChain 和 Gemini API 构建企业级知识库问答系统与智能 Agent。',
    duration: '12 周',
    level: '高阶',
    image: 'https://picsum.photos/800/600?random=3',
    tags: ['编程', 'LLM开发', 'RAG']
  },
  {
    id: 'c4',
    title: 'AI 驱动的数字营销全案',
    description: '利用 AI 自动生成文案、视频脚本及社媒内容，重构新媒体运营模式。',
    duration: '4 周',
    level: '进阶',
    image: 'https://picsum.photos/800/600?random=4',
    tags: ['营销', '短视频', '内容创作']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: '张伟',
    role: '设计总监',
    company: '某知名广告公司',
    content: '博昉翼的 AI 绘画课程彻底改变了我们的工作流，现在出图效率提升了十倍不止。',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: '李娜',
    role: '产品经理',
    company: '互联网科技大厂',
    content: '老师对 LLM 原理的讲解非常深入浅出，让我能够快速上手开发内部的 AI 助手工具。',
    avatar: 'https://picsum.photos/100/100?random=11'
  }
];