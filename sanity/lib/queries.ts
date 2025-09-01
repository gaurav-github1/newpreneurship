import { defineQuery } from 'next-sanity';

export const STARTUP_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || author->name match $search || title match $search || description match $search || category match $search] | order(_createdAt desc) {
    _id,
    title,
    description,
    image,
    category,
    username,
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
    username,
    author-> {
        _id,
        name,
        username,
        image,
    },
    slug,
    pitch
}`);

export const STARTUP_QUERY_VIEWS = defineQuery(`*[_type == "startup" && _id == $id][0] {
    views
}`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`*[_type == "author" && id==$id][0] {
    id,
    _id,
    name,
    username,
    image,
    bio,
    githubId
}`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`*[_type == "author" && _id==$id][0] {
    id,
    _id,
    name,
    username,
    image,
    bio,
    githubId
}`);


export const STARTUP_QUERY_BY_AUTHOR = defineQuery(`*[_type == "startup" && author._ref==$id] | order(_createdAt desc) {
    _id,
    title,
    description,
    image,
    category,
    username,
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

