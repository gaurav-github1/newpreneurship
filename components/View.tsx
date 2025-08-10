import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_QUERY_VIEWS } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from 'next/server';


export default async function View({ id }: { id: string }) {
  const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(STARTUP_QUERY_VIEWS, { id });

  // The after function will only run once on the server
  after(async () => {
    await writeClient.patch(id).set({ views: totalViews + 1 }).commit();
  });

  // Display the incremented value immediately
  const displayViews = totalViews + 1;

  return (

    <div className='view-container'>
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{displayViews} views</span>
      </p>
    </div>
  )
}
