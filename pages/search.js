import { useRouter } from "next/router";
import Meta from "../components/shared/Meta";
import useGetBooks from "../components/shared/useGetBooks"

const SearchPage = () => {
    const router = useRouter();
    const { q, languages, author } = router.query;

    return (
        <>
            <Meta title={q != null ? q == "" ? "Wyniki wyszukiwania" : `${q} - Wyszukiwania` : "Wyszukiwanie..." } />
            {useGetBooks(`search=${q ?? ""}&languages=${languages ?? ""}&agent_name_contains=${author ?? ""}`)}
        </>
    )
}

export default SearchPage;