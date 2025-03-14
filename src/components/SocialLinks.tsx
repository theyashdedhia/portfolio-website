
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import data from "@/data.json";

interface SocialLinksProps {
  className?: string;
  size?: number;
  iconClassName?: string;
}

const SocialLinks = ({ className, size = 20, iconClassName }: SocialLinksProps) => {
  // Map social names to icon components
  const iconMap: Record<string, any> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Twitter: Twitter,
    Email: Mail
  };

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {data.socialLinks.map((social) => {
        const IconComponent = iconMap[social.name];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="transition-all duration-300 hover:text-primary opacity-80 hover:opacity-100 hover:scale-110"
          >
            <IconComponent size={size} className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
