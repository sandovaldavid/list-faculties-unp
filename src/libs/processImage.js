import path from "path";

export async function processImage(image) {
  try {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return buffer;
  } catch (error) {
    console.error('Error processing image:', error);
    throw new Error('Failed to process image');
  }
}
