import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType(
    {
        name: 'startup',
        title: 'Startup',
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
                name: 'author',
                title: 'Author',
                type: 'reference',
                to: [{type: 'author'}],
            }),
            defineField({
                name: 'views',
                title: 'Views',
                type: 'number',
            }),
            defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
            }),
            defineField({
                name: 'category',
                title: 'Category',
                type: 'string',
                validation: (Rule) => Rule.required().min(3).max(50).error('Category must be between 3 and 50 characters long'),
            }),
            defineField({
                name: 'image',
                title: 'Image',
                type: 'url',
                validation: (Rule)=> Rule.required()
            }),
            defineField({
                name: 'pitch',
                title: 'Pitch',
                type: 'markdown',
                description: 'Write your startup pitch with markdown formatting (headers, lists, bold, italic, links, etc.)',
                validation: (Rule) => Rule.required().min(10).error('Pitch must be at least 10 characters long'),
            }),
        ],
    }
)