import { IComponent } from "@/ts/interfaces/layout"
import { createSetting } from "@layout/createSetting"

export const ReverseSetting = createSetting({
  name: "ReverseSetting",
  imports: (imports: IComponent[]): IComponent[] => {
    return imports?.length ? imports.reverse() : []
  }
})