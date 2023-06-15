import { createPage, Pages } from "@pages-router"

export const pages = new Pages({
  ...createPage("/", ["main", "home"], {
    name: {
      en: "Home",
      ru: "Главная",
      ua: "Головна"
    },
    includes: {
      "header": true
    }
  }),
  ...createPage("/catalog", ["catalog", "каталог"], {
    name: {
      en: "Home",
      ru: "Главная",
      ua: "Головна"
    },
    includes: {
      "header": true
    }
  }),
  ...createPage("/add-post", ["add-post", "ADD_POST"], {
    name: {
      en: "Home",
      ru: "Главная",
      ua: "Головна"
    },
    includes: {}
  })
})