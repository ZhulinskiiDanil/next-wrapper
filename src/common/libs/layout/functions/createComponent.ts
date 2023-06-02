import { IComponent, IFullComponent } from "@layout"
import { v4 as uuidv4 } from 'uuid'

export function createComponent(dto: IComponent): (props?: { [key: string]: any }) => IFullComponent {
  return (props?: { [key: string]: any }): IFullComponent => {
    return {
      hash: uuidv4(), props: (props || {}), ...dto
    }
  }
}