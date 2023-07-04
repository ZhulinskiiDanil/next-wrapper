import HeaderComponent from "@/widgets/main/header"
import { createComponent } from "@layout"

export const Header = createComponent({
  Component(props?: any) {
    return <HeaderComponent {...props} />
  }
})