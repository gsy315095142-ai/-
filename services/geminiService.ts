import { GoogleGenAI } from "@google/genai";
import { COURSES } from '../constants';

const SYSTEM_INSTRUCTION = `
你是一个专业的 AI 教育顾问，服务于"厦门博昉翼教育咨询有限公司"。
你的任务是根据用户的需求、背景和兴趣，推荐我们公司最合适的课程。

我们公司目前提供的课程列表如下 (JSON格式供参考):
${JSON.stringify(COURSES.map(c => ({ title: c.title, description: c.description, level: c.level, tags: c.tags })))}

请遵循以下规则：
1. 语气专业、热情且富有鼓励性。
2. 必须从上述列表中推荐 1-2 门最相关的课程。
3. 解释为什么推荐这门课程，并结合用户的具体情况。
4. 如果用户的问题与 AI 学习无关，请礼貌地引导回 AI 课程咨询。
5. 输出格式要清晰，使用 Markdown 列表或加粗重点。
6. 保持回答在 200 字以内，精简有力。
`;

export const getCourseRecommendation = async (userQuery: string): Promise<string> => {
  try {
    // Ideally, in a production app, we check if the key exists. 
    // The strict rules say assume it's valid in process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "抱歉，我现在无法连接到服务器，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，智能顾问暂时繁忙，请直接联系我们的客服人员获取人工咨询。";
  }
};