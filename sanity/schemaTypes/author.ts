import { UserIcon } from "lucide-react";
import { defineType } from "sanity";

export const author = defineType(
    {
        name: 'author',
        title: 'Author',
        type: 'document',
        icon: UserIcon,
        fields: [
            defineType({
                name: 'id',
                title: 'number',
            }),
            defineType({
                name: 'name',
                title: 'string',
            }),
            defineType({
                name: 'username',
                title: 'string',
            }),
            defineType({
                name: 'email',
                title: 'string',
            }),
            defineType({
                name: 'image',
                title: 'Image',
                type: 'url',
                options: {
                    hotspot: true,
                },
            }),
            defineType({
                name: 'bio',
                title: 'Bio',
                type: 'text',
            }),
        ],
        preview:{
            select:{
                title: 'name',
                media: 'image',
            }
        }
    }
)