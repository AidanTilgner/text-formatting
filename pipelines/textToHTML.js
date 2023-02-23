import { textToParagraphs } from "../transformers/html/paragraphs.js";
import { textToLists } from "../transformers/html/lists.js";
import { replaceLinks } from "../transformers/html/links.js";
import { format } from "prettier";
import { applyFlags } from "../flags/resolver.js";

export const textToHTML = (text, flags) => {
  let newText = text.trim();
  newText = textToLists(newText);
  newText = replaceLinks(newText);
  newText = textToParagraphs(newText);
  newText = applyFlags(newText, flags);
  newText = format(newText, { parser: "html" });
  return newText;
};
