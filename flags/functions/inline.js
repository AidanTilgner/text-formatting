export const highlightText = (text, args) => {
  let newText = text;

  args.forEach((word) => {
    const regex = new RegExp(word, "gi");
    newText = newText.replace(regex, `<mark>${word}</mark>`);
  });

  return newText;
};

export const boldText = (text, args) => {
  let newText = text;

  args.forEach((word) => {
    const regex = new RegExp(word, "gi");
    newText = newText.replace(regex, `<strong>${word}</strong>`);
  });

  return newText;
};

export const strikeText = (text, args) => {
  let newText = text;

  args.forEach((word) => {
    const regex = new RegExp(word, "gi");
    newText = newText.replace(regex, `<del>${word}</del>`);
  });

  return newText;
};

export const italicizeText = (text, args) => {
  let newText = text;

  args.forEach((word) => {
    const regex = new RegExp(word, "gi");
    newText = newText.replace(regex, `<em>${word}</em>`);
  });

  return newText;
};

export const underlineText = (text, args) => {
  let newText = text;

  args.forEach((word) => {
    const regex = new RegExp(word, "gi");
    newText = newText.replace(regex, `<u>${word}</u>`);
  });

  return newText;
};

export const superscriptText = (text, args) => {
  let newText = text;

  args.forEach((word) => {
    const regex = new RegExp(word, "gi");
    newText = newText.replace(regex, `<sup>${word}</sup>`);
  });

  return newText;
};

export const subscriptText = (text, args) => {
  let newText = text;

  args.forEach((word) => {
    const regex = new RegExp(word, "gi");
    newText = newText.replace(regex, `<sub>${word}</sub>`);
  });

  return newText;
};

export const addLink = (text, args) => {
  let newText = text;

  const links = [];

  args.forEach((arg, index) => {
    // first arg is the word to replace
    // second arg is the link
    if (index % 2 === 0) {
      links.push({ word: arg });
    }
    if (index % 2 === 1) {
      links[links.length - 1].link = arg;
    }
  });

  links.forEach((link) => {
    const regex = new RegExp(link.word, "gi");
    newText = newText.replace(regex, `<a href="${link.link}">${link.word}</a>`);
  });

  return newText;
};
