import { createPage, Pages } from "@layout"

export const pages = new Pages({
  ...createPage("/", ["/"], {
    name: {
      eu: "Home",
      ru: "Главная"
    }
  })
})