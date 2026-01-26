"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  textBefore?: string;
  textAfter?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

const Typewriter = ({
  words,
  textBefore,
  textAfter,
  typingSpeed = 50,
  deletingSpeed = 25,
  pauseDuration = 1500,
}: Props) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev: number) => (prev + 1) % words.length);
      } else {
        const nextText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
        setText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <p className="text-gray-400 sm:text-xl text-center transition-all duration-500">
      {textBefore ? `${textBefore} ` : null}
      <span className="text-yellow-500">
        <span className="sr-only">{words[wordIndex]}</span>
        <span aria-hidden="true">{text}</span>
        <span className="ml-1 mb-1 inline-block w-2 h-5 bg-yellow-500 animate-blink align-middle" />
      </span>
      {textAfter ? ` ${textAfter}` : null}
    </p>
  );
};

export default Typewriter;
