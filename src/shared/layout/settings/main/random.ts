import { IComponent, createSetting } from "@layout"

function shuffle(array: any[]) {
  array.sort(() => Math.random() - 0.5);
}

export const RandomSetting = createSetting({
  name: "RandomSetting",
  imports: (imports: IComponent[]): IComponent[] => {
    shuffle(imports)
    return imports
  }
})