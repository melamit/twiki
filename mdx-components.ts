import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
// !TODO: Switch to "our very own" theme

const themeComponents = getThemeComponents();

export function useMDXComponents(components: any) {
  return {
    ...themeComponents,
    ...components,
  };
}
