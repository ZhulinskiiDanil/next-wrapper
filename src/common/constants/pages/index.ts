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
      en: "Catalog",
      ru: "Каталог",
      ua: "Каталог"
    },
    includes: {
      "header": true
    }
  }),
  ...createPage("/add-post", ["add-post", "ADD_POST"], {
    name: {
      en: "Add post",
      ru: "Добавить пост",
      ua: "Додати пост"
    }
  }),
  ...createPage("/users/[userId]", ["user", "userById"], {
    name: {
      en: "User by id",
      ru: "Пользователь по id",
      ua: "Користувач по id"
    },
    initialValues: { userId: "123" },
    includes: { header: true }
  })
})