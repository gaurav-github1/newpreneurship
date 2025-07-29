import { client } from "@/sanity/lib/client";
import {STARTUP_QUERY_BY_ID } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppp = true;

export default async function page({params}:{params:Promise<{id:string}>}) {
  const { id } = await params;
  const post = await client.fetch(STARTUP_QUERY_BY_ID, { id }).then(res => res[0]);
  if(!post) return notFound();
  // console.log(post,post[0].title)
  
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  ) 
}
