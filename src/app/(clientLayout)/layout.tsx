import Footer from "@/components/Shared/Footer";
import HomeDrawer from "@/components/Shared/HomeDrawer";
import NavBar from "@/components/Shared/Navabr";
import {Box} from "@mui/material";

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {/* <NavBar /> */}

      <HomeDrawer children={children} />
      {/* <Box className="min-h-screen">{children}</Box> */}
    
    </>
  );
};

export default CommonLayout;
