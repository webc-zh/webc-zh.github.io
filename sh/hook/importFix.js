import read from "@3-/read";
import write from "@3-/write";
import ext from "@3-/ext";
import { dirname, join, resolve, relative } from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const ROOT = dirname(dirname(import.meta.dirname)),
  X_DIR = join(ROOT, "x");

export default (ext_list, is_import_line) => {
  const argv = yargs(hideBin(process.argv)).argv;

  for (const file_path of argv._) {
    if (!ext_list.includes(ext(file_path))) {
      continue;
    }
    const content = read(file_path);
    if (!content) {
      continue;
    }
    const lines = content.split("\n"),
      file_dir = dirname(resolve(file_path));
    let changed = false;

    const new_lines = lines.map((line) => {
      if (!is_import_line(line)) {
        return line;
      }

      return line.replace(/(['"])(\.\.?\/[^'"]*)\1/g, (match, quote, relative_path) => {
        const target_path = resolve(file_dir, relative_path);
        let new_path;
        if (target_path === X_DIR) {
          new_path = "x";
        } else if (target_path.startsWith(X_DIR + "/")) {
          new_path = "x/" + relative(X_DIR, target_path);
        } else {
          new_path = "~/" + relative(ROOT, target_path);
        }
        if (new_path !== relative_path) {
          changed = true;
        }
        return quote + new_path + quote;
      });
    });

    if (changed) {
      write(file_path, new_lines.join("\n"));
    }
  }
};
