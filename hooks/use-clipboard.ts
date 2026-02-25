"use client";

import { useState } from "react";

/**
 * Custom React hook for copying text to the clipboard with a fallback for unsupported browsers.
 *
 * @param timeout Duration in milliseconds for how long the "copied" state should be true after copying. Default is 2000ms.
 * @returns An object with `copied` boolean state and `copy` function to copy text.
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await (navigator.clipboard.writeText(text) ?? fallbackCopy(text));
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (e) {
      console.error("Failed to copy to clipboard", e);
    }
  };

  return { copied, copy };
}

function fallbackCopy(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const el = Object.assign(document.createElement("textarea"), {
      value: text,
      style: "position: fixed; left: -9999px;",
    });
    document.body.appendChild(el);
    el.focus();
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    ok ? resolve() : reject(new Error("Fallback: Copy command failed"));
  });
}
