export const encodeParams = (txt: string, lan: string, speed: string) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("src", txt); //text
  encodedParams.set("hl", lan); //voice
  encodedParams.set("r", speed); //speed
  encodedParams.set("c", "mp3"); //file type
  encodedParams.set("f", "8khz_8bit_mono");
  return encodedParams;
};
