import Image from 'next/image';
import React    from 'react';
import { getPosts } from '../_services/notion';
import Link from 'next/link';
import VideoEmbed from '@/components/layout/IframeVideo';

export default async function BlogHome() {
  const postsNotion = await getPosts();
    return (
     <div className="container mx-auto p-6">
       <h1 className="text-4xl font-bold text-center mb-8 text-primary">
         Nosso Blog
       </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         {postsNotion.map((post, index) => (
           <div
             key={index}
             className="bg-white box-content rounded-lg shadow-lg   transition-transform transform hover:scale-105 hover:shadow-2xl"
           >
             <div className="relative">
               <Image
                 src={post.imageCapa}
                 alt={post.title}
                 width={700}
                 height={400}
                 className="w-full h-[300px] object-cover"
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

               {post.slug !=  undefined && post.title != "Em construção" ? (
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

 
     </div>
   );
}
