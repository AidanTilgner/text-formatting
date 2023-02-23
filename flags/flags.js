import {
  highlightText,
  boldText,
  strikeText,
  italicizeText,
  underlineText,
  superscriptText,
  subscriptText,
  addLink,
} from "./functions/inline.js";

export const flags = {
  h: highlightText,
  b: boldText,
  s: strikeText,
  i: italicizeText,
  u: underlineText,
  sup: superscriptText,
  sub: subscriptText,
  l: addLink,
};
