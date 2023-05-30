export interface IComponent {
  props?: { [key: string]: any }
  isMain?: boolean
  Component: (...props: any[]) => any
}

export interface IFullComponent extends IComponent {
  hash: string
}