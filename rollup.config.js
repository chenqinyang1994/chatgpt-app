import typescript from "rollup-plugin-typescript2";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import less from "rollup-plugin-less";
import image from '@rollup/plugin-image';

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: "./dist/cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/iife.js",
      format: "iife",
      name: "message",
    },
    {
      file: "./dist/umd.js",
      format: "umd",
      name: "message",
    },
    {
      file: "./dist/esm.js",
      format: "es",
    },
  ],
  plugins: [
    image(),
    typescript(),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react", "@babel/preset-typescript"],
      babelHelpers: "bundled",
    }),
    less({
      output: "dist/bundle.css",
    }),
  ],
  external: ["react", "react-dom", "axios"],
};
