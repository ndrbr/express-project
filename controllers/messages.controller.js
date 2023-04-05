import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Fedor Sumkin",
  });
}

export function postMessage(req, res) {
  console.log("Updating messages...");
}
