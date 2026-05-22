let transpiler;

export default (code) => {
  if (!transpiler) {
    transpiler = new Bun.Transpiler({ loader: "js", minify: true });
  }
  return transpiler.transformSync(code);
};
