import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import write from "@3-/write";
import { COM_DIR, LIB_DIR, GEN_DIR } from "./comGen/const.js";
import compileStylus from "./comGen/stylus.js";
import { extract as extractSvgs } from "./comGen/svg.js";
import jsMinify from "./comGen/jsMinify.js";

export default async (name) => {
  const com_path = join(COM_DIR, name),
    com_js = join(com_path, name + ".js"),
    com_styl = join(com_path, name + ".styl"),
    readme_path = join(com_path, "i18n/zh/README.md"),
    demo_path = join(com_path, "Demo.svelte");

  if (existsSync(com_js)) {
    const dest_js = join(LIB_DIR, name + ".js"),
      result = await Bun.build({
        entrypoints: [com_js],
        outdir: LIB_DIR,
        minify: true,
        sourcemap: "external",
        external: ["x/*"],
        naming: "[name].[ext]",
      });
    if (!result.success) {
      console.error("Failed to build JS: " + com_js, result.logs);
      throw new Error("Build failed");
    }
    const js_code = readFileSync(dest_js, "utf-8")
      .replace(/\/\/#\s*sourceMappingURL=.+$/m, "")
      .replace(/\/\/#\s*debugId=.+$/m, "");
    write(dest_js, js_code);
  }

  if (existsSync(com_styl)) {
    const [dest_css, dest_map, dest_under_css, dest_under_map] = [
      ".css",
      ".css.map",
      "._.css",
      "._.css.map",
    ].map((ext) => join(LIB_DIR, name + ext));
    compileStylus(com_styl, dest_css, dest_map, true);
    compileStylus(com_styl, dest_under_css, dest_under_map, false);
  }

  if (existsSync(readme_path) && existsSync(demo_path)) {
    const readme = readFileSync(readme_path, "utf-8"),
      lines = readme.split("\n"),
      first_line = (lines[0] || "").replace(/^#\s*/, "").trim(),
      doc_readme = lines.slice(1).join("\n").trim(),
      svgs = extractSvgs(com_path),
      files = [];

    if (existsSync(com_styl)) {
      files.push(name + ".css");
    }
    if (existsSync(com_js)) {
      files.push(name + ".js");
    }

    const doc_js = [
      "export default [",
      "  " + JSON.stringify(doc_readme) + ",",
      '  () => import("../../../com/' + name + '/Demo.svelte"),',
      "  " + JSON.stringify(svgs) + ",",
      "  " + JSON.stringify(files),
      "];",
    ].join("\n");
    write(join(GEN_DIR, "com", "md", name + ".js"), jsMinify(doc_js));
    return [name, first_line, '() => import("./md/' + name + '.js")'];
  }
  return null;
};
