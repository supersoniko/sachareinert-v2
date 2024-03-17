import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center space-x-8 border-b bg-card px-4 py-6 md:px-12">
      <Link
        className="flex space-x-1"
        target="_blank"
        href="https://github.com/supersoniko"
      >
        <Github />
        <span>GitHub</span>
      </Link>
      <Link
        className="flex space-x-1"
        target="_blank"
        href="https://www.linkedin.com/in/sacha-reinert-it"
      >
        <Linkedin />
        <span>LinkedIn</span>
      </Link>
    </footer>
  );
};
