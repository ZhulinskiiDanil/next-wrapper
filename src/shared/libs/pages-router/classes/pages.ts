import { createPage } from "@pages-router"
import { IPage } from "@pages-router"

export class Pages {
  [key: string]: IPage | any

  constructor(pages: { [key: string]: IPage }) {
    for (const key in pages) {
      this[key] = pages[key]
    }
  }

  private isPage(page: IPage | any) {
    return !!('includes' in (page || {}))
  }

  public findMany(
    cb: (page: IPage) => any,
    options: { unique: boolean } = { unique: true }
  ): IPage[] {
    const returnedPages: { [key: string]: IPage } = {}

    return Object.entries(this)
      .filter(([_, page]) => {
        if (returnedPages[page.path] && options?.unique) {
          return false
        } else {
          returnedPages[page.path] = page
          return cb(page)
        }
      }).map(([_, page]) => page)
  }

  public includes({ name, unique = true }: {
    name: string
    unique?: boolean
  }): IPage[] {
    const returnedPages: { [key: string]: IPage } = {}

    return Object.entries(this)
      .filter(([_, page]: [string, IPage]) => {
        if (returnedPages[page.path] && unique) {
          return false
        } else {
          returnedPages[page.path] = page
          return !!page?.includes?.[name]
        }
      }).map(([_, page]) => page)
  }

  public getAll(
    options: { unique?: boolean } = { unique: true }
  ): IPage[] {
    const returnedPages: { [key: string]: IPage } = {}

    return Object.entries(this)
      .filter(([_, page]: [string, IPage]) => {
        if (returnedPages[page.path] && options?.unique) {
          return false
        } else {
          returnedPages[page.path] = page
          return this.isPage(page)
        }
      }).map(([_, page]) => page)
  }

  public get({ name }: { name: string }): IPage {
    const defaultReturn = createPage("ERROR", "ERROR").ERROR
    const value = this[name]

    if (this.isPage(value)) {
      return value
    } else {
      return defaultReturn
    }
  }
}