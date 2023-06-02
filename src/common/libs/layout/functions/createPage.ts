import { IPage } from "@layout"

export function createPage(
  path: string,
  pageName: string | string[],
  options?: {
    includes?: { [key: string]: any }
    name: {
      eu?: string
      ru?: string
    }
  }
): { [key: string]: IPage } {
  if (typeof pageName == "string") {
    return {
      [pageName]: {
        path,
        includes: options?.includes,
        name: options?.name || {}
      }
    }
  } else {
    return Object.fromEntries(
      pageName.map((page: string) => (
        [page, {
          path,
          includes: options?.includes,
          name: options?.name || {}
        }]
      ))
    )
  }
}