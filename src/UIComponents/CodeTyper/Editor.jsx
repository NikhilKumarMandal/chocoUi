import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const Editor = () => {
  const [code, setCode] = useState(`// Neo-Brutalist Editor
function createMagic() {
  const power = "Unlimited";
  const style = "Neo-Brutalism";
  
  return {
    power,
    style,
    awesome: true
  };
}`);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 font-mono">
      <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#FF90E8] border-b-4 border-black">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full hover:bg-red-400 transition-colors cursor-pointer" />
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full hover:bg-yellow-400 transition-colors cursor-pointer" />
          </div>
          <div className="font-black text-lg tracking-tighter uppercase">Editor.jsx</div>
          <div className="w-10"></div>
        </div>

        {/* Editor Container */}
        <div className="relative min-h-[300px] bg-white group">
          {/* Syntax Highlight Layer */}
          <div 
            className="absolute inset-0 p-6 pointer-events-none font-mono text-sm leading-relaxed"
            aria-hidden="true"
          >
            <Highlight
              theme={themes.github}
              code={code}
              language="javascript"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, backgroundColor: 'transparent', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>

          {/* Input Layer */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="relative w-full h-full min-h-[300px] p-6 bg-transparent text-transparent caret-black border-none outline-none resize-none font-mono text-sm leading-relaxed z-10 selection:bg-[#FF90E8] selection:text-black"
            spellCheck="false"
          />
        </div>

        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-2 bg-[#23A094] border-t-4 border-black font-bold text-xs text-white">
          <div className="flex gap-4">
            <span>JS</span>
            <span>UTF-8</span>
          </div>
          <div className="uppercase">
            Ln {code.split('\n').length}, Col {code.split('\n').pop()?.length || 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
