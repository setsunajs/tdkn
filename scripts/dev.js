import path from "node:path"
// import { sassPlugin } from "esbuild-sass-plugin"
import fg from "fast-glob"
import { build } from "esbuild"
import { execa } from "execa"

/** @return {import("esbuild").BuildOptions} */
const createBuildConfig = ({ entry, prod = true, bundle, outDir }) => ({
  entryPoints: Array.isArray(entry) ? entry : [entry],
  outdir: outDir,
  format: "esm",
  // plugins: [sassPlugin()],
  watch: !prod,
  minify: prod,
  treeShaking: true,
  external: bundle ? ["@setsunajs/observable", "setsunajs"] : [],
  bundle,
  jsxFactory: "jsx",
  jsxFragment: "Fragment",
  incremental: !prod,
  charset: "utf8",
  loader: {
    ".png": "dataurl",
    ".jpg": "dataurl"
  },
  target: "es2018",
  tsconfig: "tsconfig.build.json"
})

const cwd = process.cwd()
const baseEntry = "./packages/tdkn/src"
const outDir = "./packages/tdkn/dist"
build(
  createBuildConfig({
    entry: fg.sync(path.resolve(cwd, `./${baseEntry}/**/*.{tsx,ts,scss}`)),
    outDir,
    prod: false,
    bundle: false
  })
).then(() =>
  build(
    createBuildConfig({
      entry: path.resolve(cwd, `${baseEntry}/main.ts`),
      outDir,
      prod: false,
      bundle: true
    })
  )
)
.then(() =>
  execa("tsc", ["-p", "tsconfig.build.json", "--outDir", outDir, "--watch"], {
    stdin: "inherit"
  })
)