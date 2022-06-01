import {copySelected, copyShortcut} from "./confiruragtion/clipboard.js";
import {onInput, setOptions} from "./confiruragtion/editor.js";
import {editor} from "../../shared/elements.js";
import {loadOptions} from "./confiruragtion/load.js";
export function configureTerm(term) {
  let options = loadOptions();
  if (!("xterm" in options))
    options = {xterm: options};
  try {
    setOptions(term, options);
  } catch {
  }
  const toggle = document.querySelector("#options .toggler");
  const optionsElem = document.getElementById("options");
  if (editor == null || toggle == null || optionsElem == null)
    throw new Error("Couldn't initialize configuration menu");
  function editorOnLoad() {
    editor.contentWindow.loadOptions(loadOptions());
    editor.contentWindow.wetty_close_config = () => {
      optionsElem.classList.toggle("opened");
    };
    editor.contentWindow.wetty_save_config = (newConfig) => {
      onInput(term, newConfig);
    };
  }
  if ((editor.contentDocument || editor.contentWindow.document).readyState === "complete")
    editorOnLoad();
  editor.addEventListener("load", editorOnLoad);
  toggle.addEventListener("click", (e) => {
    editor.contentWindow.loadOptions(loadOptions());
    optionsElem.classList.toggle("opened");
    e.preventDefault();
  });
  term.attachCustomKeyEventHandler(copyShortcut);
  document.addEventListener("mouseup", () => {
    if (term.hasSelection())
      copySelected(term.getSelection());
  }, false);
}
export function shouldFitTerm() {
  return loadOptions().wettyFitTerminal ?? true;
}
