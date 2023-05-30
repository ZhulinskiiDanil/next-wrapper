import { IFullComponent } from "./component"

export type ILayoutImport = IFullComponent | (() => IFullComponent)

export interface ILayoutProps {
  imports?: ILayoutImport[]
  settings?: () => any[]
}