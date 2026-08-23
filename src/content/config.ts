import { defineCollection, z, reference } from "astro:content";

const experience = defineCollection({
    type: "content",
    schema: z.object({
        date: z.string(),
        location: z.string(),
        position: z.string(),
        company: z.string(),
    }),
});

const projects = defineCollection({
    type: "content",
    schema: ({image}) => 
        z.object({
            date: z.string(),
            title: z.string(),
            link: z.string().url(),
            img: image(),
            vid: z.string(),
            technology: z.array(z.string()),
    })
})

export const collections = { experience, projects };