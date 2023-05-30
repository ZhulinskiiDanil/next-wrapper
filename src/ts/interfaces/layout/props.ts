import { IFullComponent } from "./component"
import { IFullSetting } from "./setting"

export type ILayoutImport = IFullComponent | (() => IFullComponent)

export interface ILayoutProps {
  imports?: ILayoutImport[] | (() => ILayoutImport[])
  settings?: IFullSetting[] | (() => IFullSetting[])
}