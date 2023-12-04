export const textToLists = (text) => {
  const lines = text.split("\n");

  let newLines = lines.map((line, lineNumber) => {
    if (lineIsListItem(line)) {
      const type = getLineType(line);
      const newLine = getFormattedLine(line);

      const lineAboveIsAlsoListItem = !!lines[lineNumber - 1]
        ? lineIsListItem(lines[lineNumber - 1])
        : false;
      const lineBelowIsAlsoListItem = !!lines[lineNumber + 1]
        ? lineIsListItem(lines[lineNumber + 1])
        : false;
      return `${
        !lineAboveIsAlsoListItem ? `<${type}>` : ""
      }<li>${newLine}</li>${!lineBelowIsAlsoListItem ? `</${type}>` : ""}`;
    }
    return line;
  });

  return newLines.join("\n");
};

const lineIsOrderdListItem = (line) => {
  return Boolean(line.match(/^[0-9a-zA-Z]+\./) || line.match(/^[0-9a-zA-Z]+\)/));
};

const lineIsUnorderedListItem = (line) => {
  return line.match(/^[-*]/);
};

const lineIsListItem = (line) => {
  return lineIsOrderdListItem(line) || lineIsUnorderedListItem(line);
};

const getLineType = (line) => {
  if (lineIsOrderdListItem(line)) {
    return "ol";
  }
  if (lineIsUnorderedListItem(line)) {
    return "ul";
  }
  return null;
};

const getFormattedLine = (line) => {
  return line
    .replace(/^[0-9]+\./, "")
    .replace(/^[0-9]+\)/, "")
    .replace(/^[-*]/, "")
    .trim();
};
