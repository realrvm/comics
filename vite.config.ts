import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import UnpluginInjectPreload from "unplugin-inject-preload/vite";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    UnpluginInjectPreload({
      injectTo: "head",
      files: [
        {
          entryMatch: /.*\.(png|svg|jpg)$/,
          outputMatch: /.*\.(png|svg|jpg)$/,
        },
      ],
    }),
  ],
  server: {
    host: true,
  },
});
