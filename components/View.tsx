import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_QUERY_VIEWS } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from 'next/server'


export default async function View({ id }: { id: string }) {
    const {views : totalViews} = await client.withConfig({useCdn:false}).fetch(STARTUP_QUERY_VIEWS, {id});

    after(async ()=>
        await writeClient.patch(id).set({views: totalViews+1}).commit(),
    )

    return (
 
    <div className='view-container'>
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{totalViews} views</span>
      </p>
    </div>
  )
}
