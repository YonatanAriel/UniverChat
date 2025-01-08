/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RAPID_API_KEY: string;
  readonly VOICE_RSS_API_KEY: string;
  readonly VOICE_RSS_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
