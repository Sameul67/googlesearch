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

const demoForm = document.querySelector("[data-demo-form]");

if (demoForm) {
  const demoOutput = demoForm.querySelector(".demo-output");

  demoForm.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
      return;
    }

    if (button.hasAttribute("data-reset-demo")) {
      demoForm.querySelectorAll("input, select, textarea").forEach((control) => {
        if (control instanceof HTMLInputElement && (control.type === "checkbox" || control.type === "radio")) {
          control.checked = control.defaultChecked;
        } else if (control instanceof HTMLSelectElement) {
          Array.from(control.options).forEach((option) => {
            option.selected = option.defaultSelected;
          });
        } else if (control instanceof HTMLInputElement && control.type === "file") {
          control.value = "";
        } else {
          control.value = control.defaultValue;
        }
      });

      demoOutput.textContent = "Výchozí hodnoty obnoveny. Nic se neodesílá ani neukládá.";
    } else if (button.hasAttribute("data-demo-action")) {
      demoOutput.textContent = "Toto je pouze ukázková akce. Zadané hodnoty se nikam neodesílají ani neukládají.";
    }
  });
}
