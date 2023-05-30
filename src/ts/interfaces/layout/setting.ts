import { IComponent } from "./component"

export interface ISetting {
  name: string
  imports?: (arr: IComponent[]) => IComponent[]
}

export interface IFullSetting extends ISetting {
  hash: string
}