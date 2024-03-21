"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";

const defaultAlphabet =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabdcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]|;:?/<,.>"';

export const genRandomString = (
  length: number,
  alphabet: string = defaultAlphabet,
): string => {
  return new Array(length)
    .fill("")
    .map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
    .join("");
};

export const useRandomStrings = (count: number, length: number): string[] => {
  return useMemo(
    () =>
      Array(count)
        .fill("")
        .map(() => genRandomString(length)),
    [count, length],
  );
};

type LetterEffectTextProps = {
  text: string;
  className?: string;
};

export const LetterEffectText = ({
  text,
  className,
}: LetterEffectTextProps) => {
  const randomStrings = useRandomStrings(10, text.length);
  const textAttr = { text };
  const frameAttr = useMemo(
    () =>
      randomStrings.reduce(
        (acc, current, index) => ({
          ...acc,
          [`frame${index}`]: current,
        }),
        {},
      ),
    [randomStrings],
  );

  return (
    <span
      className={cn(
        "letter-effect-text hover:letter-effect-text-animate",
        className,
      )}
      {...textAttr}
      {...frameAttr}
    />
  );
};
