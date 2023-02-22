import { textToParagraphs } from "../transformers/html/paragraphs.js";
import { textToLists } from "../transformers/html/lists.js";
import { replaceLinks } from "../transformers/html/links.js";
import { format } from "prettier";

export const textToHTML = (text) => {
  let newText = text.trim();
  newText = textToLists(newText);
  newText = replaceLinks(newText);
  newText = textToParagraphs(newText);
  newText = format(newText, { parser: "html" });
  return newText;
};
