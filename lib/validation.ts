import z from "zod";
export const formSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title must be less than 100 characters"),
    description: z.string().min(1, "Description is required").max(500, "Description must be less than 500 characters"),
    category: z.string().min(1, "Category is required").max(100, "Category must be less than 100 characters"),
    link: z.string().url("Link must be a valid URL").refine(async(url)=>{
        try {
            const res = await fetch(url,{method:"HEAD"});
            const contentType = res.headers.get("content-type");
            return contentType?.startsWith("image/") || false;
        } catch {
            return false;
        }
    }),
    pitch: z.string().min(10,"Pitch is required")

})