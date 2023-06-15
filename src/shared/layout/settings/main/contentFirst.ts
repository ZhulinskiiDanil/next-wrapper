import { IComponent, createSetting } from "@layout"

export const ContentFirst = createSetting({
  name: "RandomSetting",
  imports: (imports: IComponent[]): IComponent[] => {
    imports.sort(a => a.isMain ? -1 : 1)
    return imports
  }
})