// components/Faq.jsx
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComicText } from '@/components/ui/comic-text';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Are you available for full-time / internship roles?",
    answer: "Yes. While I have successfully run my own freelance operations, my primary goal right now is to integrate into a high-functioning engineering team. I am actively looking for full-time or internship roles where I can tackle complex architectural challenges and scale products."
  },
  {
    question: "What's your preferred tech stack?",
    answer: "I am heavily invested in the modern JavaScript/TypeScript ecosystem—specifically Next.js, React, and Node.js for robust web applications. For data and backend infrastructure, I rely on PostgreSQL and MongoDB. When a project requires deep performance optimization or machine learning, I drop down into C++ and Python."
  },
  {
    question: "Do you have experience working with agile teams?",
    answer: "Absolutely. As the co-founder of GrindLab.tech, I directed a 100+ member engineering community, organizing sprint cycles, code reviews, and collaborative problem-solving. I know how to communicate technical debt, unblock peers, and ship code iteratively."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#0a0a0a] py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-350 mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header Area */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-32">
            <div className="flex justify-start">
              <ComicText fontSize={4.5}>FAQ</ComicText>
            </div>
            
            <div className="mt-8">
              <p className="text-zinc-400 text-lg md:text-xl font-medium">
                Got specific questions?
              </p>
              <a 
                href="#contact" 
                className="text-[#EF4444] text-lg md:text-xl font-medium mt-1 inline-block hover:opacity-70 transition-opacity"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className="border border-white/10 rounded-2xl bg-[#111111] overflow-hidden transition-colors duration-300 hover:border-white/20"
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                  >
                    <h3 className={`text-xl md:text-2xl font-medium tracking-tight pr-8 transition-colors duration-300 ${isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                      {faq.question}
                    </h3>
                    
                    <div className="shrink-0 text-[#EF4444]">
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                          <p className="text-zinc-400 text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}