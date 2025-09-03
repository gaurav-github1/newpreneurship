'use client';

import { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from '@uiw/react-md-editor';
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";

export default function StartupForm() {
  const [errors,setErrors] = useState<Record<string, string>>({});
  const {toast} = useToast();
  const router = useRouter();
  
  // Local state for all form fields to preserve values
  const [formData, setFormData] = useState({
    title: "",
    description: "", 
    category: "",
    link: "",
    pitch: ""
  });

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFormSubmit = async (prevState: {errors: string; status: string}, _: FormData)=>{
    try {
      // Use local state values instead of FormData
      const formValues = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        link: formData.link,
        pitch: formData.pitch,
      }

      await formSchema.parseAsync(formValues);

      // Create a new FormData object from our local state
      const serverFormData = new FormData();
      serverFormData.append('title', formData.title);
      serverFormData.append('description', formData.description);
      serverFormData.append('category', formData.category);
      serverFormData.append('link', formData.link);

      const result = await createPitch(prevState, serverFormData, formData.pitch);
      console.log(result.status)
      if(result.status === "SUCCESS") {
        toast({
          title: "Success",
          description: "Your startup idea has been submitted.",
          variant: "default"
        });

        // Clear form on success
        setFormData({
          title: "",
          description: "", 
          category: "",
          link: "",
          pitch: ""
        });
        setErrors({});
        
        router.push(`/startup/${result._id}`);
      }
      return result;
    } catch (error) {
      if(error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast({
          title: "Validation Error",
          description: "Please fix the errors in the form.",
          variant: "destructive"
        });

        return {
          ...prevState,
          errors : "Validation failed",
          status: "ERROR"
        }
      }
      toast({
          title: "Error",
          description: "An unexpected error occurred while validating the form.",
          variant: "destructive"
        });

      return {
        ...prevState,
        errors: "Unknown error",
        status: "ERROR"
      };
    }

  };

  const [,formAction,isPending] = useActionState(handleFormSubmit,{
    errors: "",
    status: "INITIAL"
  })
  
  return (
    <form action={formAction} className="startup-form">
        <h2 className="startup-form_title">Submit Your Startup</h2>
        <p className="startup-form_subtitle">Share your innovative idea with the world</p>
        
        <div>
            <label htmlFor="title" className="startup-form_label">Title</label>
            <Input 
              id="title" 
              className="startup-form_input" 
              name="title" 
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required 
              placeholder="Startup Title"
            />
            {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>
        
        <div>
            <label htmlFor="description" className="startup-form_label">Description</label>
            <Textarea 
              id="description" 
              className="startup-form_textarea" 
              name="description" 
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required 
              placeholder="Startup Description"
            />
            {errors.description && <p className="startup-form_error">{errors.description}</p>}
        </div>
        
        <div>
            <label htmlFor="category" className="startup-form_label">Category</label>
            <Input 
              id="category" 
              className="startup-form_input" 
              name="category" 
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              required 
              placeholder="Startup Category (e.g. Tech, Health...)"
            />
            {errors.category && <p className="startup-form_error">{errors.category}</p>}
        </div>
        
        <div>
            <label htmlFor="link" className="startup-form_label">Image Url</label>
            <Input 
              id="link" 
              className="startup-form_input" 
              name="link" 
              value={formData.link}
              onChange={(e) => handleInputChange('link', e.target.value)}
              required 
              placeholder="Startup Image Url"
            />
            {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>
        
        <div data-color-mode='light'>
            <label htmlFor="pitch" className="startup-form_label">Pitch</label>
            <MDEditor 
              value={formData.pitch} 
              onChange={(value) => handleInputChange('pitch', value as string)} 
              id="pitch"
              preview="edit"
              height={300}
              style={{borderRadius:20,overflow:"hidden"}}
              textareaProps={{
                placeholder: "Briefly describe your startup idea and how you gonna solve it."
              }}
              previewOptions={{
                disallowedElements: ['style']
              }}
            />
            {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
        </div>
    
        <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit Startup"}
              <Send className="size-6 ml-2"/>
        </Button>

    </form>
  )
}
