import { Client } from '@notionhq/client'
import { NotionDatabaseResponse } from '../_types/notion';
import { NotionToMarkdown } from 'notion-to-md';
import ImageNotFound from '../assets/Funcionarios/icon-image-not-found-free-vector.jpg'
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.DATABASE_ID!;

import { unstable_noStore as noStore } from 'next/cache';
 
export async function getPosts(){
  noStore() 

    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    });

  

     const typedResponse = ( response as  unknown) as NotionDatabaseResponse

 
     return typedResponse.results.map((post) => ({
      id: post.id ?? "Desenvolvendo",
      title: post.properties.titulo?.title[0]?.plain_text ?? "Em construção",
      slug: post.properties.slug?.rich_text[0]?.plain_text ?? undefined,
      tags: post.properties.Tags?.multi_select?.map((tag) => tag.name) ?? [],
      descricao: post.properties.descricao?.rich_text[0]?.plain_text ?? "Essa postagem está em desenvolvimento",
      imageCapa: post.properties.imageCapa?.files[0]?.file?.url ?? ImageNotFound,
      createAt: post.created_time?.toString() ?? "Data de criação não disponível"
    }));


}

export async function getMainPosts(){
  noStore();

    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      page_size:3,
     
      
    });

     const typedResponse = ( response as  unknown) as NotionDatabaseResponse

 
     return typedResponse.results.map((post) => ({
      id: post.id ?? "Desenvolvendo",
      title: post.properties.titulo?.title[0]?.plain_text ?? "Em construção",
      slug: post.properties.slug?.rich_text[0]?.plain_text ?? undefined,
      tags: post.properties.Tags?.multi_select?.map((tag) => tag.name) ?? [],
      descricao: post.properties.descricao?.rich_text[0]?.plain_text ?? "Essa postagem está em desenvolvimento",
      imageCapa: post.properties.imageCapa?.files[0]?.file?.url ?? ImageNotFound,
      createAt: post.created_time?.toString() ?? "Data de criação não disponível"
    }));


}
export async function getPost(slug: string){
  noStore();
   const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: 'slug',
          rich_text: {
            equals: slug,
          },
        },
 
      ],
    },
 
  });
  const typedResponse =( response as  unknown) as NotionDatabaseResponse
  const pageId = response.results[0].id
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  
    return  {
      title: typedResponse.results[0].properties.titulo.title[0].plain_text,
      content:mdString.parent,

    }


}

 