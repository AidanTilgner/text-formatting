export const extractFlags = (args) => {
  const flagMap = new Map();
  let currentFlag = null;

  args.forEach((arg) => {
    if (arg.startsWith("--") || arg.startsWith("-")) {
      // remove "--" or "-" from the beginning of the flag, plus trim any whitespace
      const formattedFlag = arg.replace(/^-{1,2}/, "").trim();
      currentFlag = formattedFlag;
      flagMap.set(currentFlag, []);
    } else if (currentFlag) {
      flagMap.get(currentFlag).push(arg);
    }
  });

  return flagMap;
};
