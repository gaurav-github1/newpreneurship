"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import {Search} from "lucide-react";
import SearchFormReset from "../components/SearchFormReset";
import { useDebounce } from "../hooks/useDebounce";

const SearchForm = ({ query: initialQuery }: { query?: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [inputValue, setInputValue] = useState(initialQuery || '');
    
    // Debounce the input value with 400ms delay
    const debouncedSearchValue = useDebounce(inputValue, 400);

    // Update input value when URL changes (e.g., from browser navigation)
    useEffect(() => {
        const currentQuery = searchParams.get('query') || '';
        setInputValue(currentQuery);
    }, [searchParams]);
    
    // Update URL when debounced value changes
    useEffect(() => {
        // Create a new URLSearchParams instance
        const params = new URLSearchParams(searchParams);
        
        if (debouncedSearchValue) {
            params.set('query', debouncedSearchValue);
        } else {
            params.delete('query');
        }
        
        // Only update if the value has actually changed
        const currentQuery = searchParams.get('query') || '';
        if (currentQuery !== debouncedSearchValue) {
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [debouncedSearchValue, pathname, router, searchParams]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handleReset = () => {
        setInputValue('');
        // Clear the query parameter from the URL
        const params = new URLSearchParams(searchParams);
        params.delete('query');
        router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // The URL is already updated in real-time, so we don't need to do anything here
        // You can add any additional submit logic if needed
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                name="query"
                value={inputValue}
                onChange={handleInputChange}
                className="search-input"
                placeholder="Search Startups"
            />

            <div className="flex gap-2">
                {/* Show reset button if there is text in the input */}
                {inputValue && <SearchFormReset onReset={handleReset} />}

                <button type="submit" className="search-btn text-white">
                    <Search className="size-5" />
                </button>
            </div>
        </form>
    );
};

export default SearchForm;