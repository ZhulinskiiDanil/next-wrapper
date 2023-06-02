import { initImports } from "./initImports"
import { IFullComponent, ILayoutProps } from "@layout"
import { ISetting } from "@layout"

export function initSettings(props: ILayoutProps): any {
  const imports = initImports<IFullComponent>(props.imports || [])
  const settings = (typeof props.settings == "function" ?
    props.settings() : props.settings) || []
  
  settings.forEach((setting: ISetting) => {
    setting.imports?.(imports)
  })

  return { ...props, imports }
}