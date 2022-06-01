"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.html = void 0;

var _env = require("../../shared/env.js");

var jsFiles = _env.isDev ? ['dev', 'wetty'] : ['wetty'];
var cssFiles = ['styles', 'options', 'overlay', 'terminal'];

var render = function render(title, favicon, css, js, configUrl) {
  return "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"".concat(favicon, "\">\n    <title>").concat(title, "</title>\n    ").concat(css.map(function (file) {
    return "<link rel=\"stylesheet\" href=\"".concat(file, "\" />");
  }).join('\n'), "\n  </head>\n  <body>\n    <div id=\"overlay\">\n      <div class=\"error\">\n        <div id=\"msg\"></div>\n        <input type=\"button\" onclick=\"location.reload();\" value=\"reconnect\" />\n      </div>\n    </div>\n    <div id=\"options\">\n      <a class=\"toggler\"\n         href=\"#\"\n         alt=\"Toggle options\"\n       ><i class=\"fas fa-cogs\"></i></a>\n      <iframe class=\"editor\" src=\"").concat(configUrl, "\"></iframe>\n    </div>\n    <div id=\"terminal\"></div>\n    ").concat(js.map(function (file) {
    return "<script type=\"module\" src=\"".concat(file, "\"></script>");
  }).join('\n'), "\n  </body>\n</html>");
};

var html = function html(base, title) {
  return function (_req, res) {
    res.send(render(title, "".concat(base, "/favicon.ico"), cssFiles.map(function (css) {
      return "".concat(base, "/assets/css/").concat(css, ".css");
    }), jsFiles.map(function (js) {
      return "".concat(base, "/client/").concat(js, ".js");
    }), "".concat(base, "/assets/xterm_config/index.html")));
  };
};

exports.html = html;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NvY2tldFNlcnZlci9odG1sLmpzIiwibmFtZXMiOlsianNGaWxlcyIsImlzRGV2IiwiY3NzRmlsZXMiLCJyZW5kZXIiLCJ0aXRsZSIsImZhdmljb24iLCJjc3MiLCJqcyIsImNvbmZpZ1VybCIsIm1hcCIsImZpbGUiLCJqb2luIiwiaHRtbCIsImJhc2UiLCJfcmVxIiwicmVzIiwic2VuZCJdLCJzb3VyY2VzIjpbInNlcnZlci9zb2NrZXRTZXJ2ZXIvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0RldiB9IGZyb20gJy4uLy4uL3NoYXJlZC9lbnYuanMnO1xuY29uc3QganNGaWxlcyA9IGlzRGV2ID8gWydkZXYnLCAnd2V0dHknXSA6IFsnd2V0dHknXTtcbmNvbnN0IGNzc0ZpbGVzID0gWydzdHlsZXMnLCAnb3B0aW9ucycsICdvdmVybGF5JywgJ3Rlcm1pbmFsJ107XG5jb25zdCByZW5kZXIgPSAodGl0bGUsIGZhdmljb24sIGNzcywganMsIGNvbmZpZ1VybCkgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGY4XCI+XG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIj5cbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCIke2Zhdmljb259XCI+XG4gICAgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5cbiAgICAke2Nzcy5tYXAoZmlsZSA9PiBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIke2ZpbGV9XCIgLz5gKS5qb2luKCdcXG4nKX1cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgICA8ZGl2IGlkPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtc2dcIj48L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwibG9jYXRpb24ucmVsb2FkKCk7XCIgdmFsdWU9XCJyZWNvbm5lY3RcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cIm9wdGlvbnNcIj5cbiAgICAgIDxhIGNsYXNzPVwidG9nZ2xlclwiXG4gICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICBhbHQ9XCJUb2dnbGUgb3B0aW9uc1wiXG4gICAgICAgPjxpIGNsYXNzPVwiZmFzIGZhLWNvZ3NcIj48L2k+PC9hPlxuICAgICAgPGlmcmFtZSBjbGFzcz1cImVkaXRvclwiIHNyYz1cIiR7Y29uZmlnVXJsfVwiPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJ0ZXJtaW5hbFwiPjwvZGl2PlxuICAgICR7anNcbiAgICAubWFwKGZpbGUgPT4gYDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIiR7ZmlsZX1cIj48L3NjcmlwdD5gKVxuICAgIC5qb2luKCdcXG4nKX1cbiAgPC9ib2R5PlxuPC9odG1sPmA7XG5leHBvcnQgY29uc3QgaHRtbCA9IChiYXNlLCB0aXRsZSkgPT4gKF9yZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kKHJlbmRlcih0aXRsZSwgYCR7YmFzZX0vZmF2aWNvbi5pY29gLCBjc3NGaWxlcy5tYXAoY3NzID0+IGAke2Jhc2V9L2Fzc2V0cy9jc3MvJHtjc3N9LmNzc2ApLCBqc0ZpbGVzLm1hcChqcyA9PiBgJHtiYXNlfS9jbGllbnQvJHtqc30uanNgKSwgYCR7YmFzZX0vYXNzZXRzL3h0ZXJtX2NvbmZpZy9pbmRleC5odG1sYCkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWwuanMubWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxVQUFBLEdBQVEsQ0FBQyxLQUFELEVBQVEsT0FBUixDQUFSLEdBQTJCLENBQUMsT0FBRCxDQUEzQztBQUNBLElBQU1DLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLFNBQXRCLEVBQWlDLFVBQWpDLENBQWpCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsR0FBakIsRUFBc0JDLEVBQXRCLEVBQTBCQyxTQUExQjtFQUFBLGtUQU1rQ0gsT0FObEMsNkJBT0ZELEtBUEUsMkJBUVRFLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFVBQUFDLElBQUk7SUFBQSxpREFBb0NBLElBQXBDO0VBQUEsQ0FBWixFQUE0REMsSUFBNUQsQ0FBaUUsSUFBakUsQ0FSUyx1YUFzQnFCSCxTQXRCckIsNEVBeUJURCxFQUFFLENBQ0hFLEdBREMsQ0FDRyxVQUFBQyxJQUFJO0lBQUEsK0NBQWtDQSxJQUFsQztFQUFBLENBRFAsRUFFREMsSUFGQyxDQUVJLElBRkosQ0F6QlM7QUFBQSxDQUFmOztBQThCTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQU9ULEtBQVA7RUFBQSxPQUFpQixVQUFDVSxJQUFELEVBQU9DLEdBQVAsRUFBZTtJQUNoREEsR0FBRyxDQUFDQyxJQUFKLENBQVNiLE1BQU0sQ0FBQ0MsS0FBRCxZQUFXUyxJQUFYLG1CQUErQlgsUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQUgsR0FBRztNQUFBLGlCQUFPTyxJQUFQLHlCQUEwQlAsR0FBMUI7SUFBQSxDQUFoQixDQUEvQixFQUFxRk4sT0FBTyxDQUFDUyxHQUFSLENBQVksVUFBQUYsRUFBRTtNQUFBLGlCQUFPTSxJQUFQLHFCQUFzQk4sRUFBdEI7SUFBQSxDQUFkLENBQXJGLFlBQXNJTSxJQUF0SSxxQ0FBZjtFQUNILENBRm1CO0FBQUEsQ0FBYiJ9
