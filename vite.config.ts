import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { stylexPlugin } from "vite-plugin-stylex-dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [remix(), stylexPlugin(), tsconfigPaths()],
});
