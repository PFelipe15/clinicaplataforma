 import { CgInstagram } from "react-icons/cg";
import ButtonConsulta from "./buttonConsulta";
import Logo from "./logo";
import MenuNav from "./menuNav";
import MenuMobile from "./menuNavMobile";
import InstagramButton from "./instagram-button";

export function Header() {
  return (
    <div className="container p-4 bg-white flex items-center justify-center md:justify-between gap-4 sticky flex-col lg:flex-row top-0 z-10 shadow">
      <Logo />
      <div className="hidden md:block">
        <MenuNav />
      </div>
      <div className="flex   gap-4">
      <div className="flex gap-2">

      <InstagramButton/>

        <ButtonConsulta />
      </div>
      <div className="md:hidden">
        <MenuMobile />
      </div>
      </div>
    </div>
  );
}