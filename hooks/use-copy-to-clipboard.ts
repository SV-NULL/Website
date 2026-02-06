import { CALENDAR_CONFIG } from "@/config/calendar";
import { useCallback, useState } from "react";

/**
 * Custom hook to copy text to the clipboard, with support for both modern Clipboard API and a fallback for older browsers or non-secure contexts.
 *
 * @returns An object containing the `copied` state and the `copyToClipboard` function.
 */
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback((text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(
            () => setCopied(false),
            CALENDAR_CONFIG.COPY_FEEEDBACK_DURATION_MS,
          );
        })
        .catch((e) => {
          console.error("Failed to copy using Clipboard API", e);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(
          () => setCopied(false),
          CALENDAR_CONFIG.COPY_FEEEDBACK_DURATION_MS,
        );
      } catch (e) {
        console.error("Fallback: Unable to copy", e);
      }

      document.body.removeChild(textArea);
    }
  }, []);

  return { copied, copyToClipboard };
}
