"use client";
import React, { useRef, useState } from "react";
import { Button } from "./button";

import { HTMLAttributes } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, ...props }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard && preRef.current) {
      const code = preRef.current.innerText;
      navigator.clipboard.writeText(code).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  return (
    <div className="relative w-[48rem] group">
      <pre ref={preRef} {...props} className="w-full overflow-x-auto">
        {children}
      </pre>
      <Button
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-100 hover:text-gray-700 absolute top-2 right-2 text-xs text-white bg-transparent"
        size="sm"
      >
        {isCopied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

export default CodeBlock;
