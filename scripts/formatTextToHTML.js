import { readFileSync, writeFileSync } from "fs";
import { textToHTML } from "../pipelines/textToHTML.js";

const filePath = process.argv[2];
const file = readFileSync(filePath, "utf8");

const html = textToHTML(file);

const outputFileName = filePath.split("/").pop().split(".")[0];
const outputFilePath = `output/${outputFileName}(formatTextToHTML).html`;
writeFileSync(outputFilePath, html);
console.log("Output file: ", outputFilePath);
