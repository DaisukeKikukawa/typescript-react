import { memo, FC } from "react";
import Header from "../components/organisms/layout/Header";
import { Outlet } from "react-router-dom";

export const HeaderLayout: FC = memo(() => {
  // const { children } = props;
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});

export default HeaderLayout;
