import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form
            action="/"
            scroll={false}
            className="flex w-full max-w-md mx-auto rounded-full overflow-hidden border border-gray-300 shadow-sm bg-white search-form"
        >
            <input
                type="text"
                name="query"
                defaultValue={query}
                placeholder="Search startups, ideas..."
                className="flex-grow px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center gap-1 pr-2">
                {/* Clear (X) Button */}
                {query && (
                    <SearchFormReset />
                )}

                {/* Search (Q) Button */}
                <Button
                    type="submit"
                    className="p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition search-btn"
                    title="Search"
                >
                    <Search size={18} />
                </Button>
            </div>

        </Form>
    );
};

export default SearchForm;
