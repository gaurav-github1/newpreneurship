import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';


export default function StartupCard({post}:{post:StartupTypeCard}) {
  const{ _createdAt, view, author:{_id:authorId,name},_id, description, image, category, title } = post;

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>
            {formatDate(_createdAt )}
        </p>

        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary'/>
          <span className='text-16-medium'>
            {view} views
          </span>
        </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${authorId}`}>
            <p className='text-16-medium line-clamp-1'>{name}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className='text-26-semibold line line-clamp-1'>
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <img src="https://placehold.co/600*400" alt='placeholder' height={48} width={48} className='rounded-full'/>
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc'>
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </p>

        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className='text-16-medium '>
            {category}
          </p>
        </Link>
        <Button className='startup-card_btn' asChild>
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </Button>
      </div>
    </li>
  )
}
