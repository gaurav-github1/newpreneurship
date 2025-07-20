import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
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
            type: 'url',  // Keeping as URL
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            imageUrl: 'image',  // Changed from 'media' to 'imageUrl'
        },
        prepare({ title, imageUrl }) {
            return {
                title: title || 'Untitled Author',
                // Don't set media directly with a URL
                // Instead, you'll need a custom preview component
                subtitle: imageUrl ? 'Has image' : 'No image',
            };
        },
    },
});