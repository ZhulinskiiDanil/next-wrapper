import { IPage } from "@/ts/interfaces/pages"

export function createPage(
  path: string,
  pageName: string | string[],
  includes?: { [key: string]: any }
): { [key: string]: IPage } {
  if (typeof pageName == "string") {
    return {
      [pageName]: {
        path,
        includes: includes || {}
      }
    }
  } else {
    return Object.fromEntries(
      pageName.map((page: string) => (
        [page, { path, includes }]
      ))
    )
  }
}