const pageUrl = window.location.href;
const stylesheetUrl = new URL("styles.css", window.location.href).href;
const htmlValidator = document.querySelector('[data-validator="html"]');
const cssValidator = document.querySelector('[data-validator="css"]');
const citationsLink = document.querySelector("[data-citations]");

htmlValidator.href = `https://validator.w3.org/nu/?doc=${encodeURIComponent(pageUrl)}`;
cssValidator.href = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(stylesheetUrl)}`;

if (window.location.hostname.endsWith(".github.io")) {
  const account = window.location.hostname.replace(/\.github\.io$/, "");
  citationsLink.href = `https://github.com/${account}/googlesearch/blob/main/citace.md`;
}
