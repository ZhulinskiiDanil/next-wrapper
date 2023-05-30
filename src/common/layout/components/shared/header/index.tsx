import HeaderComponent from "@ui/main/header"
import { createComponent } from "@/common/layout/createComponent"

export const Header = createComponent({
  Component(props?: any) {
    return <HeaderComponent {...props} />
  }
})