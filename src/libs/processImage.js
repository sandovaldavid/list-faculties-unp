import path from "path";
import {writeFile} from "fs/promises";

export async function processImage(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), "public", image.name)
  await writeFile(filePath, buffer);
  return filePath;
}
