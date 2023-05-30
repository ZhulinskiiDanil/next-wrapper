import { IImportsComponent } from "./component"

export interface ILayoutProps {
  imports?: ((() => IImportsComponent) | IImportsComponent)[]
  settings?: () => any[]
}