import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType(
    {
        name: 'author',
        title: 'Author',
        type: 'document',
        icon: UserIcon,
        fields: [
            defineField({
                name: 'id',
                title: 'ID',
                type: 'number',
            }),
            defineField({
                name: 'name',
                title: 'Name',
                type: 'string',
            }),
            defineField({
                name: 'username',
                title: 'Username',
                type: 'string',
            }),
            defineField({
                name: 'email',
                title: 'Email',
                type: 'string',
            }),
            defineField({
                name: 'image',
                title: 'Image',
                type: 'url',
                options: {
                    hotspot: true,
                },
            }),
            defineField({
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