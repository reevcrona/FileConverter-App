import fs from "fs/promises";

export async function saveFile() {
  try {
    await fs.writeFile("message.txt", "What da hell");
    console.log("file has been saved");
  } catch (error) {
    console.log(error);
  }
}
