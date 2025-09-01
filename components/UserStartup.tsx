import { client } from '@/sanity/lib/client';
import { STARTUP_QUERY_BY_AUTHOR } from '@/sanity/lib/queries';
import React from 'react'
import StartupCard, { StartupTypeCard } from './StartupCard';

export default async function UserStartup({id}:{id:string}) {
  
  const startups = await client.fetch(STARTUP_QUERY_BY_AUTHOR, { id });
    return (
    <>
        {startups.length>0 ? (
            startups.map((startup: StartupTypeCard) => (
                <StartupCard key={startup._id} post={startup} />
            ))
        ): (
            <p className="no-result">No startups yet</p>
        )}
    </>
  )
}
