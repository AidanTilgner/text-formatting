import { flags as FlagFunctions } from "./flags.js";

export const applyFlags = (text, flagMap) => {
  flagMap.forEach((args, flag) => {
    const flagFunction = FlagFunctions[flag];
    if (flagFunction) {
      text = flagFunction(text, args);
    }
  });
  return text;
};
