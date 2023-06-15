import { IComponent, createSetting } from "@layout"

export const ReverseSetting = createSetting({
  name: "ReverseSetting",
  imports: (imports: IComponent[]): IComponent[] => {
    return imports?.length ? imports.reverse() : []
  }
})