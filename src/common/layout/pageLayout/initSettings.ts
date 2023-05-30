import { IFullComponent, ILayoutProps } from "@/ts/interfaces/layout";
import { ISetting } from "@/ts/interfaces/layout/setting";
import { initImports } from "./initImports";

export function initSettings(props: ILayoutProps): any {
  const imports = initImports<IFullComponent>(props.imports || [])
  const settings = props.settings?.() || []
  
  settings.forEach((setting: ISetting) => {
    setting.imports?.(imports)
  })

  return { ...props, imports }
}