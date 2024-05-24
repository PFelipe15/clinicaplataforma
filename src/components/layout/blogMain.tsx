 
import { getMainPosts } from "@/app/_services/notion";
import   Link  from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default async function BlogMain() {
    const postsNotion = await getMainPosts();
     return (
       <div className="flex     text-white flex-col rounded-md items-center w-full justify-center  ">
         <h1 className=" text-3xl text-center text-primary font-semibold mb-8 animate-fadeIn">
           Nossas Noticias e Pesquisas
         </h1>

         <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
           {postsNotion.map((post, index) => (
             <div
               key={index}
               className="bg-white max-w-[400px]  rounded-lg shadow-lg w-full   transition-transform transform hover:scale-105 hover:shadow-2xl "
             >
               <div className="relative">
                 <Image
                   src={post.imageCapa}
                   alt={post.title}
                   width={700}
                   height={400}
                   className="w-full h-[200px] object-cover"
                 />
                 <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                   {post.tags.map((tag, tagIndex) => (
                     <span
                       key={tagIndex}
                       className="bg-secondary text-white px-2 py-1 rounded-full text-sm"
                     >
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
               <div className="p-6 flex flex-col  h-[400px]  justify-between   ">
                 <div>
                   <h2 className="text-2xl font-semibold mb-2 text-primary">
                     {post.title}
                   </h2>

                   <p className="text-gray-700 line-clamp-3     ">
                     {post.descricao}
                   </p>
                 </div>

                 {post.slug != undefined && post.title != "Em construção" ? (
                   <Link
                     href={`/blog/${post.slug}`}
                     className="flex items-center justify-center text-white px-4 py-2 rounded hover:bg-secondary transition-all bg-primary"
                   >
                     Ver mais
                   </Link>
                 ) : (
                   <a className="flex items-center justify-center text-white px-4 py-2 rounded bg-red-500 hover:bg-red-900 cursor-not-allowed">
                     Indisponivel
                   </a>
                 )}
               </div>
             </div>
           ))}
         </div>

         <Link href={"/blog"}  className="m-8 font-bold">
          <Button className="bg-primary text-white">
            Ver Todas as Noticias
          </Button>
         </Link>
       </div>
     );
}