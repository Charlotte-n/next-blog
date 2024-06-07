import {NextUIProvider} from "@nextui-org/react";
import '../app/assets/nprogress.css'
export function Providers({children}: { children: React.ReactNode }) {
  return (
      <NextUIProvider>
          {children}
      </NextUIProvider>
  )
}
export default Providers