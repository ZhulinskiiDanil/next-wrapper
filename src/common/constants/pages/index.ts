import { createPage, Pages } from "@layout"

export const pages = new Pages({
  ...createPage("/", ["/"], {
    name: {
      en: "Home",
      ru: "Главная"
    }
  })
})