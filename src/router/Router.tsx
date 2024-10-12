import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import HomeRoutes from "./HomeRoutes";
import Page404 from "../components/pages/Page404";
import HeaderLayout from "../templates/HeaderLayout";

const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<HeaderLayout/>}>
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
});

export default Router;
