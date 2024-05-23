 import React from 'react';
 import { getPost } from '@/app/_services/notion';
 import ReactMarkdown from 'react-markdown';
 export default async function BlogPost({params}:{params:{slug:string}}) {
  const post = await getPost(params.slug);

  return (
    <div className="container min-h-[100vh] mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        {post.title}{" "}
      </h1>
      <div className='prose lg:prose-em'>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
