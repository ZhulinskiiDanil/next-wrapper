import { IPage } from "@pages-router"
import { ICountries } from "../types/countries"

// Functions
import { v4 as uuidv4 } from 'uuid'

export function createPage(
  path: string,
  pageName: string | string[],
  options?: {
    name?: ICountries
    includes?: { [key: string]: any }
    initialValues?: { [key: string]: string } | null
  }
): { [key: string]: IPage } {
  const pageValue = {
    key: uuidv4(),
    path: path || "/",
    includes: options?.includes || {},
    name: options?.name || {},
    initialValues: options?.initialValues || null,
    parsePath(props: { [key: string]: any }): string {
      let parsedPath = this.path
      
      for (const key in props) {
        if (path.includes(`[${key}]`)) {
          parsedPath = parsedPath.replace(`[${key}]`, props[key])
        }
      }

      return parsedPath
    },
    withInitialValues() {
      return this.parsePath(options?.initialValues || {})
    }
  }
  
  if (typeof pageName == "string") {
    return {
      [pageName]: pageValue
    }
  } else {
    return Object.fromEntries(
      pageName.map((page: string) => (
        [page, pageValue]
      ))
    )
  }
}