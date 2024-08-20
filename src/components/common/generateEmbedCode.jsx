import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../../style/var.css";

const brandColors = {
  background: "var(--gray-10)", // Light gray background
  text: "#218bff", // Dark gray text
  keyword: "#218bff", // Blue for keywords
  string: "#218bff", // Green for strings
  boolean: "#218bff", // Firebrick for booleans
  function: "#218bff", // Purple for functions
  number: "#218bff", // Dark orange for numbers
  operator: "#218bff", // Brown for operators
  comment: "#218bff", // Gray for comments
};

// Add this section to create a custom theme
const customTheme = {
  ...vscDarkPlus,
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    color: brandColors.text,
  },
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: brandColors.background,
  },
  keyword: { color: brandColors.keyword },
  string: { color: brandColors.string },
  boolean: { color: brandColors.boolean },
  function: { color: brandColors.function },
  number: { color: brandColors.number },
  operator: { color: brandColors.operator },
  comment: { color: brandColors.comment },
};

export function generateEmbedCode(style) {
  if (!style) {
    return "";
  }

  const tableStyle = `
    border-collapse: separate;
    border-radius: ${style.borderRadius}px;
    border: ${style.borderWidth}px solid ${style.borderColor};
  `
    .replace(/\s+/g, " ")
    .trim();

  const cellStyle = `
    border-radius: ${style.borderRadius}px;
    background-color: ${style.backgroundColor};
  `
    .replace(/\s+/g, " ")
    .trim();

  const linkStyle = `
    padding: ${style.paddingY}px ${style.paddingX}px;
    display: inline-block;
    font-family: ${style.fontFamily}, sans-serif;
    font-size: ${style.fontSize}px;
    font-weight: ${style.isBold ? "bold" : "normal"};
    color: ${style.fontColor};
    text-align: center;
    text-decoration: none;
    line-height: ${style.fontSize * 1.5}px;
  `
    .replace(/\s+/g, " ")
    .trim();

  const codeString = `
<table cellpadding="0" cellspacing="0" border="0" style="${tableStyle}">
  <tr>
    <td align="center" style="${cellStyle}">
      <a href="#" target="_blank" style="${linkStyle}">
        ${style.buttonText}
      </a>
    </td>
  </tr>
</table>
  `.trim();

  return (
    <SyntaxHighlighter
      language="html"
      style={customTheme}
      wrapLines={true}
      wrapLongLines={true}
      customStyle={{
        width: "100%",
        fontSize: "0.825rem",
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}
