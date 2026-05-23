import stylus from "stylus";
import { join } from "node:path";
import ROOT from "~/vite/const/ROOT.js";

export default (content, file_path) =>
  stylus(content).set("filename", file_path).include(join(ROOT, "node_modules")).render();
