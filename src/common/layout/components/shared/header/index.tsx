import HeaderComponent from "@ui/main/header"
import { createComponent } from "@layout"

export const Header = createComponent({
  Component(props?: any) {
    return <HeaderComponent {...props} />
  }
})