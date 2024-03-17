"use client";

import { useMemo } from "react";

import styles from "./letter-effect-text.module.scss";

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

export const LetterEffectText = ({ text }: { text: string }) => {
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

  return <span className={styles.textEffect} {...textAttr} {...frameAttr} />;
};
