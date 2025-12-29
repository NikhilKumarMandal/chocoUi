import React, { useState, useEffect, useRef } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { motion } from 'framer-motion';

const codeSnippet = `function twoSum(nums, target) {
  // Create a map to store complements
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    // Check if complement exists
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    // Store current number and index
    map.set(nums[i], i);
  }
  
  return [];
}`;

const LiveCode = () => {
  const [text, setText] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setText(codeSnippet.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Reset to loop the animation
        setTimeout(() => {
          currentIndex = 0;
          setText('');
        }, 2000);
      }
    }, 30 + Math.random() * 50); // Random typing speed for realism

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-white/10 font-mono text-sm relative">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-gray-400 text-xs font-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-code"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            solution.js
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Code Area */}
        <div 
          ref={scrollRef}
          className="p-4 overflow-y-auto h-[400px] scroll-smooth"
        >
          <Highlight
            theme={themes.vsDark}
            code={text}
            language="javascript"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={{ ...style, backgroundColor: 'transparent', margin: 0, fontFamily: 'inherit' }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                    <span className="table-cell text-right pr-6 select-none text-gray-600 w-10 text-xs">
                      {i + 1}
                    </span>
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                      {/* Cursor on the last line */}
                      {i === tokens.length - 1 && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="inline-block w-[2px] h-4 bg-blue-400 ml-0.5 align-middle"
                        />
                      )}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        
        {/* Status Bar */}
        <div className="px-4 py-1 bg-[#007acc] text-white text-[10px] flex justify-between items-center">
            <span>JavaScript</span>
            <span>Ln {text.split('\n').length}, Col {text.split('\n').pop()?.length || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveCode;
