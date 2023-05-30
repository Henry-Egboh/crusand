import { Outlet } from "react-router-dom";
import NavComponent from "../components/NavComponent";
import React from "react";

export const RootLayout = () => {
  return (
    <header>
      {/* navbar section  */}
      <main>
        <NavComponent />
      </main>

      {/* outlet for other components */}
      <main>
      <Outlet />
      </main>
    </header>
  );
};
