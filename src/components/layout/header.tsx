 import ButtonConsulta from "./buttonConsulta";
import Logo from "./logo";
import MenuNav from "./menuNav";
import MenuMobile from "./menuNavMobile";

export function Header() {
  return (
    <div className="container bg-white flex items-center justify-between gap-4 sticky md:flex-col lg:flex-row top-0 z-10 shadow">
      <Logo />
      <div className="hidden md:block">
        <MenuNav />
      </div>
      <div className="mr-5 md:mr-0">
        <ButtonConsulta />
      </div>
      <div className="md:hidden">
        <MenuMobile />
      </div>
    </div>
  );
}