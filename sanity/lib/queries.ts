import { defineQuery } from 'next-sanity';

export const STARTUP_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || author->name match $search || title match $search || description match $search || category match $search] | order(_createdAt desc) {
    _id,
    title,
    description,
    image,
    category,
    views,
    _createdAt,
    author-> {
        _id,
        name,
        image,
    },
    slug,
    pitch
}`);
export const STARTUP_QUERY_BY_ID = defineQuery(`*[_type == "startup" && _id== $id] | order(_createdAt desc) {
    _id,
    title,
    description,
    image,
    category,
    views,
    _createdAt,
    author-> {
        _id,
        name,
        image,
    },
    slug,
    pitch
}`);

