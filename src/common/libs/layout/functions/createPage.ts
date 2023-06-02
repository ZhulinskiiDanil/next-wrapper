import { ICountries } from "@/ts/types/shared/countries"
import { IPage } from "@layout"

export function createPage(
  path: string,
  pageName: string | string[],
  options?: {
    includes?: { [key: string]: any }
    name: ICountries
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