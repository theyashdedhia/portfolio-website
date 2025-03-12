
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  size?: number;
  iconClassName?: string;
}

const SocialLinks = ({ className, size = 20, iconClassName }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      ariaLabel: "GitHub Profile"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      ariaLabel: "LinkedIn Profile"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      ariaLabel: "Twitter Profile"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      ariaLabel: "Send an email"
    }
  ];

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className="transition-all duration-300 hover:text-primary opacity-80 hover:opacity-100 hover:scale-110"
        >
          <social.icon size={size} className={iconClassName} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
