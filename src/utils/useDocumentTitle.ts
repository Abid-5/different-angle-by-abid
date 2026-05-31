import { useEffect } from "react";

/**
 * A custom hook to dynamically update the browser tab document.title.
 * It appends the global brand name suffix to maintain consistent branding.
 *
 * @param title The current page or context title (e.g. "Gallery" or "Stories")
 */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    const baseTitle = "Different Angle by Abid";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  }, [title]);
}
