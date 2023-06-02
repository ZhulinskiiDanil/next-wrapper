import { ICountries } from "@/ts/types/shared/countries"

export interface IPage {
  path: string
  includes?: { [key: string]: boolean }
  name: ICountries
}

export interface IPages {
  findPages: () => { [key: string]: IPage }
}
