import { ILayoutImport } from "@layout"

export function initImports<T>(imports: ILayoutImport[] | (() => ILayoutImport[])): T[] {
  if (imports) {
    const parsedimports = typeof imports == "function" ?
      imports() : imports
    
    return parsedimports.map((importedComponent: any) => (
      typeof importedComponent == "function" ?
        importedComponent() : importedComponent
    ))
  }
  
  return []
}