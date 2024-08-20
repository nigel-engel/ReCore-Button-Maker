export function generateEmbedCode(style) {
  if (!style) {
    return ''; 
  }

  const tableStyle = `
    border-collapse: separate;
    border-radius: ${style.borderRadius}px;
    border: ${style.borderWidth}px solid ${style.borderColor};
  `.replace(/\s+/g, ' ').trim();

  const cellStyle = `
    border-radius: ${style.borderRadius}px;
    background-color: ${style.backgroundColor};
  `.replace(/\s+/g, ' ').trim();

  const linkStyle = `
    padding: ${style.paddingY}px ${style.paddingX}px;
    display: inline-block;
    font-family: ${style.fontFamily}, sans-serif;
    font-size: ${style.fontSize}px;
    font-weight: ${style.isBold ? 'bold' : 'normal'};
    color: ${style.fontColor};
    text-align: center;
    text-decoration: none;
    line-height: ${style.fontSize * 1.5}px;
  `.replace(/\s+/g, ' ').trim();

  return `
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
}