import { IComponent } from "@layout"
import { createSetting } from "@/common/libs/layout/functions/createSetting"

export const ReverseSetting = createSetting({
  name: "ReverseSetting",
  imports: (imports: IComponent[]): IComponent[] => {
    return imports?.length ? imports.reverse() : []
  }
})