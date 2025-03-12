
import { Download } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  text: string;
  filePath: string;
  className?: string;
}

const DownloadButton = ({ text, filePath, className }: DownloadButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <a
      href={filePath}
      download
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-medium transition duration-300 ease-out",
        "bg-gradient-to-r from-primary/90 to-primary",
        "text-white shadow-md hover:shadow-lg",
        isAnimating && "animate-pulse", 
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <span className="relative flex items-center gap-2">
        {text}
        <Download
          size={16}
          className={cn(
            "transition-transform duration-300",
            isHovered ? "translate-y-0.5" : ""
          )}
        />
      </span>
      
      <span className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-white/30 transition-all duration-300 group-hover:w-3/4" />
    </a>
  );
};

export default DownloadButton;
