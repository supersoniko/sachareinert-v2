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
    <div className="fixed flex w-full items-center justify-between border-b bg-card/50 pl-12 backdrop-blur-lg">
      <div>
        <span className="text-4xl font-semibold">Sacha </span>
        <span className="text-4xl">Reinert</span>
      </div>
      <nav className="flex space-x-4">
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
    </div>
  );
};
