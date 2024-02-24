import axios from "axios";
import { encodeParams } from "../utils/encodeParams";

//d63a2df64f11442596ff051932ce176f  - apiKey
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
  params: { key: "d63a2df64f11442596ff051932ce176f", b64: true },
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "8be7d08215msh45d28e3d9c633e3p109efajsn0dad38837480",
    "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
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
