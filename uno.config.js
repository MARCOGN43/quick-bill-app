import { defineConfig } from "unocss";
import presetWind4 from "@unocss/preset-wind4";
import { presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: "Hind",
      },
    }),
  ],
});
