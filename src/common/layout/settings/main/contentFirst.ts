import { IComponent } from "@layout"
import { createSetting } from "@/common/libs/layout/functions/createSetting"

export const ContentFirst = createSetting({
  name: "RandomSetting",
  imports: (imports: IComponent[]): IComponent[] => {
    imports.sort(a => a.isMain ? -1 : 1)
    return imports
  }
})