import { Button } from "../ui/button";
import ButtonConsulta from "./buttonConsulta";
import Logo from "./logo";
import MenuNav from "./menuNav";
import MenuMobile from "./menuNavMobile";

export function Header() {
  return (
    <div className="container  bg-white flex justify-between items-center py-5 sticky md:flex-col gap-4 lg:flex-row top-0 z-10 shadow">
      <Logo />
       <div className="hidden md:block">
        <MenuNav />
      </div>
      <ButtonConsulta/>
        <div className="md:hidden">
        <MenuMobile />
      </div>
    </div>
  );
}