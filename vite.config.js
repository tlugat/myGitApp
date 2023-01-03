import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "/myGitApp/",
	root: resolve("src/"),
	server: {
		port: 3000,
		host: "0.0.0.0",
	},
});
