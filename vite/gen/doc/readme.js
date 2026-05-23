import { existsSync } from "node:fs";
import read from "@3-/read";
import save from "~/vite/gen/doc/save.js";

const genReadme = (path) => {
  if (existsSync(path)) {
    let deleted = false;
    const readme = read(path),
      lines = readme.split("\n").filter((line) => {
        if (!deleted && line.startsWith("[") && line.endsWith(")")) {
          if (line.indexOf("[") == line.lastIndexOf("[")) {
            deleted = true; // 过滤第一个以 [ 开头且以 ) 结尾的行（移除预览链接）
            return false;
          }
        }
        return true;
      }),
      title = (lines[0] || "").replace(/^#\s*/, "").trim(),
      body = lines.slice(1).join("\n").trim();
    save("readme.js", JSON.stringify([title, body]));
  }
};

export default genReadme;
