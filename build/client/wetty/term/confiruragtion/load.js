import _ from "../../../../web_modules/pkg/lodash.js";
export function loadOptions() {
  const defaultOptions = {xterm: {fontSize: 14}};
  try {
    return _.isUndefined(localStorage.options) ? defaultOptions : JSON.parse(localStorage.options);
  } catch {
    return defaultOptions;
  }
}
