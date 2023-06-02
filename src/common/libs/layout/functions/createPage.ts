import { IPage } from "@layout"
import { ICountries } from "@/ts/types/shared/countries"

// Functions
import { v4 as uuidv4 } from 'uuid'

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
        key: uuidv4(),
        path: path || "/",
        includes: options?.includes || {},
        name: options?.name || {}
      }
    }
  } else {
    return Object.fromEntries(
      pageName.map((page: string) => (
        [page, {
          key: uuidv4(),
          path: path || "/",
          includes: options?.includes || {},
          name: options?.name || {}
        }]
      ))
    )
  }
}