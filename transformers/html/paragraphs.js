export const textToParagraphs = (text) => {
  const lines = text.split("\n").map((line) => {
    if (line.length < 1 || line === " ") {
      return "<br />";
    }
    // line is another tag, so don't wrap it in a <p> tag
    if (lineIsNonInlineTag(line)) {
      return line;
    }
    return `<p>${line}</p>`;
  });
  return lines.join("\n");
};

const inlineTags = [
  "a",
  "span",
  "strong",
  "em",
  "b",
  "i",
  "u",
  "s",
  "small",
  "sub",
  "sup",
  "mark",
  "del",
];

const lineIsNonInlineTag = (line) => {
  const matchesTag = line.match(/<[^>]+>/);
  if (!matchesTag) {
    return false;
  }
  const tag = matchesTag[0];
  const tagName = tag.match(/<([^>]+)>/)[1].split(" ")[0];
  return !inlineTags.includes(tagName);
};
