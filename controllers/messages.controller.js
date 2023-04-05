import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "vim.gif"));
}

export function postMessage(req, res) {
  console.log("Updating messages...");
}
