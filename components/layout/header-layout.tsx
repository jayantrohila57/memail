"use client";
 
import Headroom from "react-headroom";
const HeaderLayout = ({ children }: {children:React.ReactNode}) => (
  <Headroom className="z-50">{children}</Headroom>
);

export default HeaderLayout;
