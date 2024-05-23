'use server'
import { Client } from '@notionhq/client'
import { NotionDatabaseResponse } from '../_types/notion';
import { NotionToMarkdown } from 'notion-to-md';
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.DATABASE_ID!;


export async function getPosts(){
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    
 
    });

     const typedResponse =( response as  unknown) as NotionDatabaseResponse

    return typedResponse.results.map((post) => ({
      id: post.id,
      title: post.properties.titulo.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      tags:post.properties.Tags.multi_select.map((tag)=>tag.name),
      descricao:post.properties.descricao.rich_text[0].plain_text,
      imageCapa:post.properties.imageCapa.files[0].file.url,
      createAt:post.created_time.toString
     }));
}

export async function getPost(slug: string){
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

 