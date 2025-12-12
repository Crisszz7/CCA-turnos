import React from "react";
import {BgPages} from "./components/IU/BgPages.jsx";
import { HeaderComponent } from "./components/IU/HeaderComponent";
import{ NavbarComponent }from "./components/IU/NavbarComponent.jsx";
import {TableComponent} from "./components/IU/TableComponent.jsx";


export const Services = () => {
  return (
    <>
        <BgPages/>
        <div className="w-full h-dvh bg-transparent  ">
            <HeaderComponent/>
            <NavbarComponent/>
            <div className="m-auto h-max w-11/12 lg:w-3/4 rounded-md lg:mt-16  shadow-lg">
            <TableComponent title={"Servicios"} />
            </div>
        </div>
    </>
  );
}

export default Services;
