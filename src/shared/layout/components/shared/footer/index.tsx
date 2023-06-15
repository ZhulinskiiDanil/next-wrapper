import FooterComponent from "@/widgets/main/footer"
import { createComponent } from "@layout"

export const Footer = createComponent({
  Component(props?: any) {
    return <FooterComponent {...props} />
  }
})