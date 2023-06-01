import { createPage, Pages } from "@layout"

export const pages = new Pages({
  ...createPage("/", ["/"]),
  ...createPage("/catalog", ["/catalog", "catalog"]),
})