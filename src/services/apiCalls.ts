import axios from "axios";
import { encodeParams } from "../utils/encodeParams";

type AudiOptions = {
  method: string;
  url: string;
  params: { key: string; b64: boolean };
  headers: {
    "content-type": string;
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
  data?: URLSearchParams;
};
const options: AudiOptions = {
  method: "POST",
  url: "https://voicerss-text-to-speech.p.rapidapi.com/",
  params: { key: import.meta.env.VOICE_RSS_API_KEY, b64: true },
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": import.meta.env.RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VOICE_RSS_API_HOST,
  },
};

export const getAudio = async (
  txt: string,
  lang: string = "en-us",
  speed: string = "0"
) => {
  try {
    options.data = encodeParams(txt, lang, speed);
    const response = await axios.request(options);
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
