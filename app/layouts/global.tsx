import Footer from "@/components/footer";
import Navigator from "@/components/navigator";
import { memo, useEffect } from "react";
import '../assets/icon/icon.css'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(()=>{
    //@ts-ignore
    import('lib-flexible')
  },[])
  return (
    <div>
      <Navigator scrollTop={20}></Navigator>
      {children}
      <div className="absolute bottom-0 w-[100%]">
        <Footer></Footer>
      </div>
      
    </div>
  );
}
export default memo(Layout)
