import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import {STARTUP_QUERY_BY_ID } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";

// export const experimental_ppp = true;

export default async function page({params}:{params:Promise<{id:string}>}) {
  const { id } = await params;
  const post = await client.fetch(STARTUP_QUERY_BY_ID, { id }).then(res => res[0]);
  if(!post) return notFound();
  const parsedContent = markdownit().render(post.pitch);

  // console.log(post)
  console.log(post.pitch);
  
  return (
    <>
      <section className="pink_container !min-h-[30vh]">
        <p className="tag">{formatDate(post._createdAt)}</p>
        <h1 className="heading">{post?.title}</h1>
        <p className="sub-heading !min-h-5xl">{post?.description}</p>
      </section>

      <section className="section_container">
        <img src={post.image} alt="thumbnail" className="w-full h-auto rounded-xl" />
      
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href={`/user/${post.author._id}`} className="flex items-center gap-2 mb-3">
              <Image 
                src={post.author.image} 
                className="rounded-full drop-shadow-lg" 
                alt="author avatar" 
                height={74} width={74} 
              />
              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium !text-black-300">@{post.author.username}</p>
              </div>
            </Link>
            <p className="category-tag">{post.category}</p>
          </div>

          <h3 className="text-30-bold">Startup Detail</h3>
          {parsedContent ? (
            <article className="prose max-w-4xl font-work-sans break-all" dangerouslySetInnerHTML={{ __html: parsedContent }} />
          ):(
            <p>No content available</p>
          )}
        </div>
      </section>
    </>
  )
}
