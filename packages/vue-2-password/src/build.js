/**
 * The entry point to build the package.
 *
 * While building the package, TypeScript complains about index.ts types.
 * The build is still compiled but the CLI throws types errors instead
 * of showing the compilation results…
 */
export { default as Password } from "./components/Password.vue";
