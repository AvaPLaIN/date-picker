import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["index.ts"],
  output: [
    {
      dir: "dist",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      preserveModules: true,
    },
    {
      dir: "dist",
      format: "esm",
      exports: "named",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [
    postcss({
      extensions: [".css"],
    }),
    typescript(),
    resolve(),
    commonjs(),
  ],
};
