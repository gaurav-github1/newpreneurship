import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const playlist = defineType(
    {
        name: 'playlist',
        title: 'Playlist',
        type: 'document',
        fields: [
            defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
            }),
            defineField({
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options:{
                    source: 'title',
                }
            }),
            defineField({
                name: 'select',
                title: 'Select',
                type: 'array',
                of: [{type: 'reference', to: [{type: 'startup'}]}],
            }),
        ],
    }
)