import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext, useMemo, useState } from "react"
import useModal from "../components/shared/hooks/useModal";
import useTextInput from "../components/shared/inputs/useTextInput";
import { getLanguageList } from "../components/shared/utility/languages";
import Select from "react-select";
import Router from 'next/router'

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchInput, searchInputValue] = useTextInput({ placeholder: "Wyszukaj książki" });
    const [authorInput, authorInputValue, setAuthorInput] = useTextInput({ placeholder: "Autor" });

    const options = useMemo(() => { return getLanguageList() }, []);
    const [languageValue, setLanguageValue] = useState(options[0]);

    const resetFilters = () => {
        setAuthorInput("");
        setLanguageValue(options[0])
    }

    const encode = text => {
        const x = encodeURIComponent(text ?? "");
        return x;
    }

    const formSubmit = e => {
        e.preventDefault();
        Router.push(`/search?q=${encode(searchInputValue)}&languages=${encode(languageValue.value)}&author=${encode(authorInputValue)}`)
        setVisibleFilters(false);
    }

    const searchSubmit = e => {
        e.preventDefault();
        Router.push(`/search?q=${encode(searchInputValue)}`);
    }

    const filterModalElement = (
        <form className="flex flex-col gap-8" action="/search" onSubmit={formSubmit}>
            <fieldset>
                <label>Tytuł</label>
                {searchInput}
            </fieldset>
            <hr />
            <fieldset>
                <label>Autor</label>
                {authorInput}
            </fieldset>

            <fieldset>
                <label>Język</label>
                <Select instanceId="filter-lang" options={options} noOptionsMessage={() => "Nie znaleziono języka"} value={languageValue} onChange={setLanguageValue} />
            </fieldset>

            <button className="reset-focus btn-padding btn-rounded bg-orange-600 hover:bg-orange-700 focus-visible:ring-orange-800 font-semibold text-neutral-50" type="reset" onClick={resetFilters}>Wyczyść filtry</button>
            <button className="reset-focus btn-padding btn-rounded bg-green-600 hover:bg-green-700 focus-visible:ring-green-800 font-semibold text-neutral-50 flex gap-2 justify-center items-center" type="submit">
                Szukaj
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )

    const [filterModal, setVisibleFilters] = useModal(filterModalElement, { title: "Filtry" });

    const searchBox = (
        <div className="flex w-full p-5 justify-center items-center gap-2">
            <form onSubmit={searchSubmit}>
                {searchInput}
            </form>
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