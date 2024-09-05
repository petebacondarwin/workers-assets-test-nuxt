import { type NitroPreset } from "nitropack";

export default <NitroPreset>{
  extends: "cloudflare",
  exportConditions: ["workerd"],
  output: {
    dir: "{{ rootDir }}/dist",
    publicDir: "{{ output.dir }}/public",
    serverDir: "{{ output.dir }}/worker",
  },
  wasm: {
    lazy: false,
    esmImport: true,
  },
  rollupConfig: {
    output: {
      entryFileNames: "index.js",
      format: "esm",
      inlineDynamicImports: false,
    },
  },
};
