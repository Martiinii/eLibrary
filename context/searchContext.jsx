import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext } from "react"
import useModal from "../components/shared/useModal";
import useTextInput from "../components/shared/useTextInput";

const SearchContext = createContext();



const SearchProvider = ({ children }) => {
    const [searchInput, searchInputValue] = useTextInput({ className: "text-center border-2 border-indigo-400 focus-visible:border-transparent", placeholder: "Wyszukaj książki" });

    const filterModalElement = (
        <>
            {searchInput}
        </>
    )
    const [filterModal, setVisibleFilters] = useModal(filterModalElement, { title: "Filtry" });

    const searchBox = (
        <div className="flex w-full p-5 justify-center items-center gap-2">
            {searchInput}

            <button className="reset-focus btn-padding btn-rounded bg-blue-500 hover:bg-blue-600 focus-visible:ring-blue-800 text-white" onClick={() => { setVisibleFilters(true) }}>
                <FontAwesomeIcon icon={faFilter} />
            </button>
            {filterModal}
        </div>
    )

    const value = { searchBox }

    return (
        <SearchContext.Provider
            value={value}
        >
            {children}
        </SearchContext.Provider>
    )
}

const useSearch = () => {
    const context = useContext(SearchContext)

    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider")
    }

    return context;
}

export { SearchProvider, useSearch }