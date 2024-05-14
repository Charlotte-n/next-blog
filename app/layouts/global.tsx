import Footer from "@/components/footer";
import Navigator from "@/components/navigator";
import { memo } from "react";


function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigator scrollTop={20}></Navigator>
      {children}
      <Footer></Footer>
    </div>
  );
}
export default memo(Layout)
