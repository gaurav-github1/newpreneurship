"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "next/form";

import {Search} from "lucide-react";
import SearchFormReset from "../components/SearchFormReset";

const SearchForm = ({ query: initialQuery }: { query?: string }) => {
    const [inputValue, setInputValue] = useState(initialQuery || '');
    const router = useRouter();

    const handleReset = () => {
        setInputValue('');
        // If there was an initial query in the URL, a reset should also clear the URL.
        if (initialQuery) {
            router.push('/');
        }
    };

    return (
        // We use a standard <form> here because we're controlling it with state.
        <Form action="/" scroll={false} className="search-form">
            <input
                name="query"
                value={inputValue} // Controlled input
                onChange={(e) => setInputValue(e.target.value)} // Update state on change
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
        </Form>
    );
};

export default SearchForm;