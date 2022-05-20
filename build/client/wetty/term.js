import _ from "../../web_modules/pkg/lodash.js";
import {Terminal} from "../../web_modules/pkg/xterm.js";
import {FitAddon} from "../../web_modules/pkg/xterm-addon-fit.js";
import {WebLinksAddon} from "../../web_modules/pkg/xterm-addon-web-links.js";
import {configureTerm, shouldFitTerm} from "./term/confiruragtion.js";
import {terminal as termElement} from "../shared/elements.js";
export class Term extends Terminal {
  constructor(socket) {
    super();
    this.socket = socket;
    this.fitAddon = new FitAddon();
    this.loadAddon(this.fitAddon);
    this.loadAddon(new WebLinksAddon());
  }
  resizeTerm() {
    this.refresh(0, this.rows - 1);
    if (shouldFitTerm())
      this.fitAddon.fit();
    this.socket.emit("resize", {cols: this.cols, rows: this.rows});
  }
}
export function terminal(socket) {
  const term = new Term(socket);
  if (_.isNull(termElement))
    return void 0;
  termElement.innerHTML = "";
  term.open(termElement);
  configureTerm(term);
  window.onresize = term.resizeTerm;
  window.wetty_term = term;
  return term;
}
