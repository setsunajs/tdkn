import { defineConfig } from "vite"
import { setsunaPlugin } from "@setsunajs/plugin-setsuna"
import { createStyleImportPlugin } from "vite-plugin-style-import"

export default defineConfig({
  plugins: [
    setsunaPlugin(),
    createStyleImportPlugin({
      libs: [{
        libraryName: "tdkn",
        resolveStyle: name => `tdkn/dist/${name}/style/${name}.css`
      }]
    })
  ]
})
