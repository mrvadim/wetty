import Toastify from "../../web_modules/pkg/toastify-js.js";
import fileType from "../../web_modules/pkg/file-type.js";
const DEFAULT_FILE_BEGIN = "[5i";
const DEFAULT_FILE_END = "[4i";
function onCompleteFile(bufferCharacters) {
  let fileCharacters = bufferCharacters;
  try {
    fileCharacters = window.atob(fileCharacters);
  } catch (err) {
  }
  const bytes = new Uint8Array(fileCharacters.length);
  for (let i = 0; i < fileCharacters.length; i += 1) {
    bytes[i] = fileCharacters.charCodeAt(i);
  }
  let mimeType = "application/octet-stream";
  let fileExt = "";
  const typeData = fileType(bytes);
  if (typeData) {
    mimeType = typeData.mime;
    fileExt = typeData.ext;
  } else if (/^[\x00-\xFF]*$/.test(fileCharacters)) {
    mimeType = "text/plain";
    fileExt = "txt";
  }
  const fileName = `file-${new Date().toISOString().split(".")[0].replace(/-/g, "").replace("T", "").replace(/:/g, "")}${fileExt ? `.${fileExt}` : ""}`;
  const blob = new Blob([new Uint8Array(bytes.buffer)], {
    type: mimeType
  });
  const blobUrl = URL.createObjectURL(blob);
  Toastify({
    text: `Download ready: <a href="${blobUrl}" target="_blank" download="${fileName}">${fileName}</a>`,
    duration: 1e4,
    newWindow: true,
    gravity: "bottom",
    position: "right",
    backgroundColor: "#fff",
    stopOnFocus: true
  }).showToast();
}
export class FileDownloader {
  constructor(onCompleteFileCallback = onCompleteFile, fileBegin = DEFAULT_FILE_BEGIN, fileEnd = DEFAULT_FILE_END) {
    this.fileBuffer = [];
    this.fileBegin = fileBegin;
    this.fileEnd = fileEnd;
    this.partialFileBegin = "";
    this.onCompleteFileCallback = onCompleteFileCallback;
  }
  bufferCharacter(character) {
    if (this.fileBuffer.length === 0) {
      if (this.partialFileBegin.length === 0) {
        if (character === this.fileBegin[0]) {
          this.partialFileBegin = character;
          return "";
        }
        return character;
      }
      const nextExpectedCharacter = this.fileBegin[this.partialFileBegin.length];
      if (character === nextExpectedCharacter) {
        this.partialFileBegin += character;
        if (this.partialFileBegin === this.fileBegin) {
          this.partialFileBegin = "";
          this.fileBuffer = this.fileBuffer.concat(this.fileBegin.split(""));
          return "";
        }
        return "";
      }
      const dataToReturn = this.partialFileBegin + character;
      this.partialFileBegin = "";
      return dataToReturn;
    }
    this.fileBuffer.push(character);
    if (this.fileBuffer.length >= this.fileBegin.length + this.fileEnd.length && this.fileBuffer.slice(-this.fileEnd.length).join("") === this.fileEnd) {
      this.onCompleteFileCallback(this.fileBuffer.slice(this.fileBegin.length, this.fileBuffer.length - this.fileEnd.length).join(""));
      this.fileBuffer = [];
    }
    return "";
  }
  buffer(data) {
    if (this.fileBuffer.length === 0 && this.partialFileBegin.length === 0 && data.indexOf(this.fileBegin[0]) === -1) {
      return data;
    }
    return data.split("").map(this.bufferCharacter.bind(this)).join("");
  }
}
