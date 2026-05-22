import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import ENTRIES from "./vite/const/ENTRIES.js";
import plugins from "./vite/plugins.js";

const ROOT = import.meta.dirname;

if (!existsSync(join(ROOT, "gen/com/index.js"))) {
  execSync("bun ./com.js", { stdio: "inherit" });
}

export default defineConfig((cfg) => {
  const { command } = cfg,
    is_build = command == "build";
  return {
    base: "./",
    resolve: {
      alias: {
        "~/": ROOT,
      },
    },
    server: {
      port: 5180,
    },
    plugins: [
      {
        name: "spa-history-fallback",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const [url, query] = req.url.split("?");
            if (
              req.method == "GET" &&
              url != "/" &&
              !url.includes(".") &&
              req.headers.accept?.includes("text/html")
            ) {
              req.url = "/Index.html" + (query ? "?" + query : "");
            }
            next();
          });
        },
      },
      ...plugins(is_build),
    ],
    build: {
      rollupOptions: {
        input: Object.keys(ENTRIES),
      },
    },
  };
});
