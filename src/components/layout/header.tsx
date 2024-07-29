 
 
import ButtonConsulta from "./buttonConsulta";
import Logo from "./logo";
import MenuNav from "./menuNav";
import MenuMobile from "./menuNavMobile";
import InstagramButton from "./instagram-button";
import { getPosts } from "@/app/_services/notion";
import CommandSearch from "./comand-search";
import { Motion } from "./motion-custom";

export async function Header() {
  const posts = await getPosts()
  return (
    <Motion
    
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container p-4 mx-auto  bg-white flex items-center justify-center md:justify-between gap-2 sticky flex-col lg:flex-row top-0 z-10 shadow"
    >
      <Logo />
      <div className="hidden md:block">
        <MenuNav />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2  flex-col md:flex-row items-center justify-center">
          
          <CommandSearch posts={posts}/>
          <div className="flex gap-2  items-center justify-center">
          <InstagramButton />
          <ButtonConsulta />
          <MenuMobile />

          </div>

        </div>
      </div>
    </Motion>
  );
}
