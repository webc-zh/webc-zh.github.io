import { globby } from "globby";

export default async (ext_name) => {
  return await globby(["**/*." + ext_name], {
    gitignore: true,
  });
};
