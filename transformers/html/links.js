export const replaceLinks = (text) => {
  const lines = text.split("\n");
  let newLines = lines.map((line, lineNumber) => {
    if (lineContainsEmail(line)) {
      const email = getEmail(line);
      const emailText = getEmailText(line);
      return `<a href="mailto:${email}">${emailText}</a>`;
    }
    return line;
  });
  return newLines.join("\n");
};

const lineContainsEmail = (line) => {
  return !!line.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
};

const getEmail = (line) => {
  const email = line.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)[0];
  return email;
};

const getEmailText = (line) => {
  return getEmail(line);
};
