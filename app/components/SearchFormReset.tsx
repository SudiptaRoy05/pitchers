import { X } from "lucide-react";

const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) {

            form.reset();

        }
    }
    return (
        <div>
            <button
                onClick={reset}
                type="reset"
                className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition"
                title="Clear"
            >
                <X size={18} />
            </button>
        </div>
    )

}

export default SearchFormReset

