import Link from "next/link";
import { LetterEffectText } from "../letter-effect-text/letter-effect-text";

const links = [
  {
    label: "Pet Project",
    href: "#pet-project",
  },
  {
    label: "Contributions",
    href: "#contributions",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const Header = () => {
  return (
    <div className="fixed z-20 flex w-full items-center justify-between border-b bg-card/50 pl-4 backdrop-blur-lg md:pl-12">
      <Link href="#hero">
        <span className="text-lg font-semibold md:text-4xl">Sacha </span>
        <span className="text-lg md:text-4xl">Reinert</span>
      </Link>
      <nav className="hidden space-x-4 md:flex">
        {links.map((link) => (
          <Link
            className="flex h-16 w-36 items-center justify-center border-l-2"
            key={link.href}
            href={link.href}
          >
            <LetterEffectText text={link.label} />
          </Link>
        ))}
      </nav>
      <Link
        className="flex h-16  w-36 items-center justify-center border-l-2 md:hidden"
        href="#contact"
      >
        <LetterEffectText text="Contact" />
      </Link>
    </div>
  );
};
