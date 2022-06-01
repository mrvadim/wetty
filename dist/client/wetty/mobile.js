import _ from "../../web_modules/pkg/lodash.js";
export function mobileKeyboard() {
  const [screen] = document.getElementsByClassName("xterm-screen");
  if (_.isNull(screen))
    return;
  screen.setAttribute("contenteditable", "true");
  screen.setAttribute("spellcheck", "false");
  screen.setAttribute("autocorrect", "false");
  screen.setAttribute("autocomplete", "false");
  screen.setAttribute("autocapitalize", "false");
}
