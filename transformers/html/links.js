export const replaceLinks = (text) => {
  const lines = text.split("\n");
  let newLines = lines.map((line, lineNumber) => {
    if (lineContainsEmail(line)) {
      const newLine = getNewLine(line);
      return newLine;
    }
    return line;
  });
  return newLines.join("\n");
};

const lineContainsEmail = (line) => {
  return !!line.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/);
};

const getNewLine = (line) => {
  // replace all emails with links
  const matches = line.match(
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g
  );

  let newLine = line;

  matches.forEach((match) => {
    const link = `<a href="mailto:${match}">${match}</a>`;
    newLine = newLine.replace(match, link);
  });

  return newLine;
};
