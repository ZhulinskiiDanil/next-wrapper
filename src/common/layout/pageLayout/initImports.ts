import { ILayoutImport } from "@/ts/interfaces/layout"

export function initImports<T>(imports: ILayoutImport[]): T[] {
  if (imports) {
    return imports.map((importedComponent: any) => {
      return typeof importedComponent == "function" ?
        importedComponent() : importedComponent
    })
  } else {
    return []
  }
}