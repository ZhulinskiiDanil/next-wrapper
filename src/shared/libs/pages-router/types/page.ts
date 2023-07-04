import { ICountries } from "./countries"

export interface IPage {
  key: string
  path: string
  includes?: { [key: string]: boolean }
  name: ICountries
  initialValues: { [key: string]: string } | null
  parsePath: (props: { [key: string]: any }) => string
  withInitialValues: () => string
}