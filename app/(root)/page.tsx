import MouseTracker from "../../components/MouseTracker";
import SeachForm from "@/components/SeachForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams}: {searchParams : Promise<{query?:string}>}) {

  const query = (await searchParams).query;
  const params = {search: query || null};
  const {data: posts} = await sanityFetch({query: STARTUP_QUERY, params});

  // const posts = await client.fetch(STARTUP_QUERY);
  // console.log(JSON.stringify(posts, null, 2)); 

  // const posts = [{
  //   _createdAt: new Date(),
  //   view: 100,
  //   author: {_id:1,name:"Elon Musk"},  
  //   _id: "1",
  //   description: "This is a sample startup description.",
  //   image: "https://via.placeholder.com/150",
  //   category: "Robot",
  //   title: "we are robot",
  // }]

  return (
    <>
      <div>
        <MouseTracker />
        <section className="pink_container">
          <h1 className="heading">Pitch your startup,<br/> Connect with 
          Enterpenuers</h1>

          <p className="sub-heading !max-h-3xl">Join our community of enterpenuers and pitch your startup to get funding and mentorship.</p>

          <SeachForm query={query} />
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `You searched for: ${query}` : "Search for startups to connect with enterpenuers."}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? posts.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
            )) : "No startups found"}
          </ul>
        </section>

        <SanityLive />
      </div>
    </>
  );
}
