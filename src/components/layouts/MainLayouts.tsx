import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

// type MainLayoutProps = {
//   children: React.ReactNode;
// };

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
