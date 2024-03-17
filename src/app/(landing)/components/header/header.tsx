import Link from "next/link";
import { LetterEffectText } from "../letter-effect-text/letter-effect-text";

export const Header = () => {
  return (
    <div className="flex justify-between border-b bg-card px-12 py-4">
      <div>
        <span className="text-4xl font-semibold">Sacha </span>
        <span className="text-4xl">Reinert</span>
      </div>
      <nav className="flex space-x-4">
        <Link href="#contact">
          <LetterEffectText text="Contact" />
        </Link>
        <Link href="#contact">
          <LetterEffectText text="Contact" />
        </Link>
        <Link href="#contact">
          <LetterEffectText text="Contact" />
        </Link>
        <Link href="#contact">
          <LetterEffectText text="Contact" />
        </Link>
      </nav>
    </div>
  );
};
