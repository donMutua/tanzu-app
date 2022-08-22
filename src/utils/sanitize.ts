import DOMPurify from "dompurify";

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content: string) => {
  return typeof window === "undefined" ? DOMPurify.sanitize(content) : content;
};
