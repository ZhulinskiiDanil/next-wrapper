import { ICountries } from "@shared/types"

export interface IPage {
  key: string
  path: string
  includes?: { [key: string]: boolean }
  name: ICountries
  parsePath: (props: { [key: string]: any }) => string
}