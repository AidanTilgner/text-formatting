# Text Formatting
Some scripts to format plain text in various ways

## Scripts
* `formatTextToHTML.js` - Formats plain text to HTML
    * Finds lists and formats them as HTML lists
    * Finds paragraphs and formats them as HTML paragraphs
    * Adds <br> tags to white spaces
    * Runs through prettier to format the HTML

## Usage
To run a script, use the following format:
`node scripts/<scriptName> <inputFile> <flags>`

### Flags
* `-h <text>` - Highlights the text
* `-b <text>` - Bold the text
* `-i <text>` - Italicize the text
* `-u <text>` - Underline the text
* `-s <text>` - Strikethrough the text
* `-sup <text>` - Superscript the text
* `-sub <text>` - Subscript the text
* `-l <text> <link>` - Make the text a link