import FooterComponent from "@ui/main/footer"
import { createComponent } from "@/common/layout/createComponent"

export const Footer = createComponent({
  Component(props?: any) {
    return <FooterComponent {...props} />
  }
})

// export const Footer = (props?: any) => ({
//   props,
//   Component(props?: any) {
//     return <FooterComponent {...props} />
//   }
// })