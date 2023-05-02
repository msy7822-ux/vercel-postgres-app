import React, { ReactNode } from "react";
import { Header } from "./Header";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen gap-5 mb-5">
      <Header />

      <div className="mx-6 flex flex-col flex-1">
        <div className="p-6 rounded-md flex-1 w-full bg-white">{children}</div>
      </div>
    </div>
  );
};
