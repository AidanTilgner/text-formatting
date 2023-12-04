"""
Formats a text file to html.
"""

import argparse
import os

def text_to_html(text: str):
    """
    Given a text string, returns an html string.
    """
    html_content = "<html><body>"
    lines = text.split("\n")
    in_list = False
    list_type = None
    paragraph = ""  # Accumulator for paragraph lines

    for line in lines:
        if line.strip() == "":
            if paragraph:
                html_content += "<p>{}</p>".format(paragraph.strip())
                paragraph = ""  # Reset paragraph accumulator
            continue
        elif line.startswith(("-", "*")):  # Unordered list
            if paragraph:  # Close paragraph if open
                html_content += "<p>{}</p>".format(paragraph.strip())
                paragraph = ""
            if not in_list or list_type != 'ul':
                if in_list:  # Close previous list
                    html_content += "</{}>".format(list_type)
                html_content += "<ul>"
                in_list = True
                list_type = 'ul'
            html_content += "<li>{}</li>".format(line.strip("-* ").strip())
        elif line[0].isdigit() and line[1] == '.':  # Ordered list
            if paragraph:  # Close paragraph if open
                html_content += "<p>{}</p>".format(paragraph.strip())
                paragraph = ""
            if not in_list or list_type != 'ol':
                if in_list:  # Close previous list
                    html_content += "</{}>".format(list_type)
                html_content += "<ol>"
                in_list = True
                list_type = 'ol'
            html_content += "<li>{}</li>".format(line[2:].strip())
        else:
            if in_list:  # Close list if open
                html_content += "</{}>".format(list_type)
                in_list = False
            paragraph += " " + line.strip()  # Add line to paragraph accumulator

    # Close any open paragraph or list at the end
    if paragraph:
        html_content += "<p>{}</p>".format(paragraph.strip())
    if in_list:
        html_content += "</{}>".format(list_type)

    html_content += "</body></html>"
    return html_content



if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Converts a text file to html.')
    parser.add_argument('text_path', type=str, help='path to text file')
    args = parser.parse_args()
    text_path = args.text_path
    print(f"Converting {text_path} to html...")
    with open(text_path, "r", encoding='utf-8') as text_file:
        text = text_file.read()
    content = text_to_html(text)

    # original file name plus extension, put in the 'output' folder
    new_file_name = os.path.join("output", os.path.splitext(os.path.basename(text_path))[0] + ".html")
    with open(new_file_name, "w", encoding='utf-8') as html_file:
        html_file.write(content)
