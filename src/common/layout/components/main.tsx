// Псевдо компонент для указания порядка в DOM дереве
import { createComponent } from "@layout/createComponent"

export const Content = createComponent({
  isMain: true,
  Component() {}
})