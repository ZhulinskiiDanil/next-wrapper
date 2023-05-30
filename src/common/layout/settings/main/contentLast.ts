import { IComponent } from "@/ts/interfaces/layout"
import { createSetting } from "@layout/createSetting"

export const ContentLast = createSetting({
  name: "RandomSetting",
  imports: (imports: IComponent[]): IComponent[] => {
    imports.sort(a => a.isMain ? 1 : -1)
    return imports
  }
})