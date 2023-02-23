import { readFileSync, writeFileSync } from "fs";
import { extractFlags } from "../flags/extract.js";
import { textToHTML } from "../pipelines/textToHTML.js";

const filePath = process.argv[2];
const flags = extractFlags(process.argv.slice(3));

const file = readFileSync(filePath, "utf8");

const html = textToHTML(file, flags);

const outputFileName = filePath.split("/").pop().split(".")[0];
const outputFilePath = `output/${outputFileName}(formatTextToHTML).html`;
writeFileSync(outputFilePath, html);
console.info("Output file: ", outputFilePath);
